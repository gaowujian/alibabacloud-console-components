(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{xoUQ:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p})),t.d(e,"demoMeta",(function(){return d})),t.d(e,"_demoSrcFiles",(function(){return m}));var o=t("mXGw"),a=t.n(o),r=t("BgHK"),i=t("UutA");function s(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var c=function(n){function e(e){var t;return(t=n.call(this,e)||this).onAdd=function(){var n=t.state.value.concat([]);n.push("new"),t.setState({value:n}),t.props.onChange(n)},t.state={value:void 0===e.value?[]:e.value},t}l(e,n);var t=e.prototype;return t.componentWillReceiveProps=function(n){"value"in n&&this.setState({value:void 0===n.value?[]:n.value})},t.render=function(){return a.a.createElement(u,null,this.state.value.map((function(n,e){return a.a.createElement(r.Button,{key:e},n)})),a.a.createElement(r.Button,{type:"primary",onClick:this.onAdd.bind(this)},"Add ＋"," "))},e}(a.a.Component),p=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))||this).field=new r.Field(s(e),{deepReset:!0}),e}l(e,n);var t=e.prototype;return t.onGetValue=function(){console.log(this.field.getValue("custom"))},t.render=function(){var n=this.field,e=n.init,t=n.setValue,o=n.reset;return a.a.createElement("div",null,a.a.createElement(c,e("custom",{initValue:["test"]})),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(r.Button,{style:{marginRight:8},type:"primary",onClick:this.onGetValue.bind(this)},"getValue"),a.a.createElement(r.Button,{type:"primary",onClick:function(){return t("custom",["test","setValue"])},style:{marginRight:8}},"setValue"),a.a.createElement(r.Button,{onClick:function(){return o()}},"reset"))},e}(a.a.Component),d={zhName:"自定义组件",zhDesc:"自己的组件如何接入Field。\n\n\t`最低标准`: 组件支持 `onChange` 读取组件数据。`达到效果`：Field 可以 getValue，但是 setValue 无效\n\t\n\t`完全支持`: 组件支持[受控](https://facebook.github.io/react/docs/forms.html#controlled-components)， 也就是支持两个api：`value` `onChange`. value: 设置组件的数据; onChange: 在组件修改的时候在第一个数暴露数据"},u=i.default.div.withConfig({displayName:"demo9__SCustom",componentId:"rk4hmx-0"})(["border:1px dashed;padding:4px;display:inline-block;span{border:1px solid green;padding:0px 5px;height:24px;display:inline-block;margin-right:2px;}"]),m={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo9";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo9.js":"import React from 'react'\nimport { Button, Field } from '@alicloud/console-components'\nimport styled from 'styled-components'\n\nclass Custom extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: typeof props.value === 'undefined' ? [] : props.value,\n    }\n  }\n\n  // update value\n  componentWillReceiveProps(nextProps) {\n    if ('value' in nextProps) {\n      this.setState({\n        value: typeof nextProps.value === 'undefined' ? [] : nextProps.value,\n      })\n    }\n  }\n\n  onAdd = () => {\n    const value = this.state.value.concat([])\n    value.push('new')\n\n    this.setState({\n      value,\n    })\n    this.props.onChange(value)\n  }\n\n  render() {\n    return (\n      <SCustom>\n        {this.state.value.map((v, i) => {\n          return <Button key={i}>{v}</Button>\n        })}\n        <Button type=\"primary\" onClick={this.onAdd.bind(this)}>\n          Add ＋{' '}\n        </Button>\n      </SCustom>\n    )\n  }\n}\n\n/* eslint-disable react/no-multi-comp */\nexport default class Demo9 extends React.Component {\n  field = new Field(this, {\n    deepReset: true,\n  })\n\n  onGetValue() {\n    console.log(this.field.getValue('custom'))\n  }\n\n  render() {\n    const { init, setValue, reset } = this.field\n\n    return (\n      <div>\n        <Custom {...init('custom', { initValue: ['test'] })} />\n        <br />\n        <br />\n        <Button\n          style={{ marginRight: 8 }}\n          type=\"primary\"\n          onClick={this.onGetValue.bind(this)}\n        >\n          getValue\n        </Button>\n        <Button\n          type=\"primary\"\n          onClick={() => setValue('custom', ['test', 'setValue'])}\n          style={{ marginRight: 8 }}\n        >\n          setValue\n        </Button>\n        <Button onClick={() => reset()}>reset</Button>\n      </div>\n    )\n  }\n}\n\nexport const demoMeta = {\n  zhName: `自定义组件`,\n\n  zhDesc: `自己的组件如何接入Field。\n\n\t\\`最低标准\\`: 组件支持 \\`onChange\\` 读取组件数据。\\`达到效果\\`：Field 可以 getValue，但是 setValue 无效\n\t\n\t\\`完全支持\\`: 组件支持[受控](https://facebook.github.io/react/docs/forms.html#controlled-components)， 也就是支持两个api：\\`value\\` \\`onChange\\`. value: 设置组件的数据; onChange: 在组件修改的时候在第一个数暴露数据`,\n}\n\nconst SCustom = styled.div`\n  border: 1px dashed;\n  padding: 4px;\n  display: inline-block;\n  span {\n    border: 1px solid green;\n    padding: 0px 5px;\n    height: 24px;\n    display: inline-block;\n    margin-right: 2px;\n  }\n`\n","demoMeta.json":'{"entryPath":"src/demo/demo9.js"}'}}}]);
//# sourceMappingURL=108-5e7bf0e880e7111090a7.js.map