(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{XGHJ:function(e,n,t){"use strict";t.r(n),t.d(n,"demoMeta",(function(){return d})),t.d(n,"_demoSrcFiles",(function(){return c}));var o=t("mXGw"),a=t.n(o),l=t("BgHK"),r=function(e){for(var n=[],t=0;t<e;t++)n.push({title:{name:"Quotation for 1PCS Nano "+(3+t)+".0 controller compatible"},id:"100306660940"+t,time:2e3+t,index:t});return n},i=function(e,n,t){return a.a.createElement("a",null,"Remove(",t.id,")")};n.default=function(){var e=Object(o.useState)(20),n=e[0],t=e[1];return a.a.createElement(l.Table,{dataSource:r(1e3),maxBodyHeight:400,useVirtual:!0,scrollToRow:n,onBodyScroll:function(e){t(e)}},a.a.createElement(l.Table.Column,{title:"Id1",dataIndex:"id",width:100}),a.a.createElement(l.Table.Column,{title:"Index",dataIndex:"index",width:200}),a.a.createElement(l.Table.Column,{title:"Time",dataIndex:"time",width:200}),a.a.createElement(l.Table.Column,{title:"Time",dataIndex:"time",width:200}),a.a.createElement(l.Table.Column,{title:"Time",dataIndex:"time",width:200,lock:"right"}),a.a.createElement(l.Table.Column,{cell:i,width:200,lock:!0}))};var d={zhName:"虚拟滚动",zhDesc:"使用 `useVirtual` 开启虚拟滚动，`scrollToRow` 滚动到指定列"},c={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo15";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"src/styles.less":"","src/demo/demo15.js":'import React, { useState } from \'react\'\nimport { Table } from \'@alicloud/console-components\'\n\nconst dataSource = j => {\n  const result = []\n  for (let i = 0; i < j; i++) {\n    result.push({\n      title: {\n        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,\n      },\n      id: `100306660940${i}`,\n      time: 2000 + i,\n      index: i,\n    })\n  }\n  return result\n}\nconst render = (value, index, record) => {\n  return <a>Remove({record.id})</a>\n}\n\nconst Demo15 = () => {\n  const [scrollToRow, setScrollToRow] = useState(20)\n\n  const onBodyScroll = start => {\n    setScrollToRow(start)\n  }\n\n  return (\n    <Table\n      dataSource={dataSource(1000)}\n      maxBodyHeight={400}\n      useVirtual\n      scrollToRow={scrollToRow}\n      onBodyScroll={onBodyScroll}\n    >\n      <Table.Column title="Id1" dataIndex="id" width={100} />\n      <Table.Column title="Index" dataIndex="index" width={200} />\n      <Table.Column title="Time" dataIndex="time" width={200} />\n      <Table.Column title="Time" dataIndex="time" width={200} />\n      <Table.Column title="Time" dataIndex="time" width={200} lock="right" />\n      <Table.Column cell={render} width={200} lock />\n    </Table>\n  )\n}\n\nexport default Demo15\n\nexport const demoMeta = {\n  zhName: `虚拟滚动`,\n  zhDesc: \'使用 `useVirtual` 开启虚拟滚动，`scrollToRow` 滚动到指定列\',\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo15.js"}'}}}]);
//# sourceMappingURL=304-d315627a9e885d9b1bd9.js.map