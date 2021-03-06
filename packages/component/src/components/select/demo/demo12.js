import React, { useState, useRef, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'
import styled from 'styled-components'

const { AutoComplete } = Select

const SWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
`

const Demo12 = () => {
  const [dataSource, setDataSource] = useState([])
  const searchTimeout = useRef(null)
  const handleChange = useCallback(value => {
    clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => {
      fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
        .then(response => response.json())
        .then(data => {
          const dataS = data.result.map(item => item[0])
          setDataSource(dataS)
        })
    }, 100)
  }, [])

  return (
    <SWrapper>
      <AutoComplete
        filterLocal={false}
        placeholder="search from taobao"
        onChange={handleChange}
        dataSource={dataSource}
      />
    </SWrapper>
  )
}

export default Demo12

export const demoMeta = {
  zhName: `动态数据`,
  zhDesc: '使用动态数据填充 AutoComplete, 设置 `filterLocal` 为 false',
}
