import React from 'react'
import { CascaderSelect } from '@alicloud/console-components'

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
    .then(response => response.json())
    .then(data => {
      data[1].disabled = true
      this.setState({ data })
    })
    .catch(e => console.log(e))
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  render() {
    return <CascaderSelect 
      style={{ width: '302px' }} 
      dataSource={this.state.data} 
      onChange={this.handleChange} />
  }
}
