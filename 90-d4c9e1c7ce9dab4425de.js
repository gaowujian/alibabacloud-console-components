(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{xZeo:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"_demoSrcFiles",(function(){return a}));t("xl0S");var o=t("mXGw"),r=t.n(o),s=t("BgHK");var l=new Array(30).fill(r.a.createElement("p",null,"Start your business here by searching a popular product")),i=function(e){var n,t;function o(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).state={visible:!1,isFullScreen:!1},n.onOpen=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.toggleIsFullScreen=function(){n.setState({isFullScreen:!n.state.isFullScreen})},n}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=l.map((function(e,n){return r.a.createElement("div",{key:n},e)})),n=this.state,t=n.visible,o=n.isFullScreen;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"block",marginBottom:"10px"}},"When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:"),r.a.createElement(s.Switch,{style:{display:"block",marginBottom:"10px"},checked:o,onChange:this.toggleIsFullScreen}),r.a.createElement(s.Button,{onClick:this.onOpen,type:"primary"},"Open dialog"),r.a.createElement(s.Dialog,{title:"Welcome to Alibaba.com",visible:t,isFullScreen:o,onOk:this.onClose,onCancel:this.onClose,onClose:this.onClose},e))},o}(r.a.Component),a={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo5";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo5.js":"import React from 'react'\nimport { Switch, Button, Dialog } from '@alicloud/console-components'\n\nconst largeContent = new Array(30).fill(\n <p>Start your business here by searching a popular product</p>\n)\n\nexport default class Demo5 extends React.Component {\n  state = {\n    visible: false,\n    isFullScreen: false\n  }\n\n  onOpen = () => {\n    this.setState({\n      visible: true\n    })\n  }\n\n  onClose = () => {\n    this.setState({\n      visible: false\n    })\n  }\n\n  toggleIsFullScreen = () => {\n    this.setState({\n      isFullScreen: !this.state.isFullScreen\n    })\n  }\n\n  render() {\n\t  const newLargeContent=largeContent.map((content,index) => \n      <div key={index}>{content}</div>\n    )\n    const { visible, isFullScreen } = this.state\n\n    return (\n      <div>\n        <div style={{ display: 'block', marginBottom: '10px' }}>\n          When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:\n        </div>\n        <Switch style={{ display: 'block', marginBottom: '10px' }} checked={isFullScreen} onChange={this.toggleIsFullScreen} />\n        <Button onClick={this.onOpen} type=\"primary\">\n          Open dialog\n        </Button>\n        <Dialog title=\"Welcome to Alibaba.com\"\n          visible={visible}\n          isFullScreen={isFullScreen}\n          onOk={this.onClose}\n          onCancel={this.onClose}\n          onClose={this.onClose}>\n          {newLargeContent}\n        </Dialog>\n      </div>\n    )\n  }\n}","demoMeta.json":'{"entryPath":"src/demo/demo5.js"}'}}}]);
//# sourceMappingURL=90-d4c9e1c7ce9dab4425de.js.map