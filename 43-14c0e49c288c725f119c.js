(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{cSJh:function(n,e,t){"use strict";t.r(e),t.d(e,"_demoSrcFiles",(function(){return l}));t("1c7q");var o=t("mXGw"),a=t.n(o),r=t("BgHK"),c=(t("xWXN"),{style:{width:300},title:"Title",subTitle:"Sub-title",showTitleBullet:!1,showHeadDivider:!1});e.default=function(){return a.a.createElement("div",null,a.a.createElement(r.Card,Object.assign({},c,{contentHeight:"auto"}),a.a.createElement("div",{className:"custom-content"},a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"))),"  ",a.a.createElement(r.Card,Object.assign({},c,{contentHeight:200}),a.a.createElement("div",{className:"custom-content"},a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"),a.a.createElement("p",null,"Card content"))))};var l={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo2";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/demo/demo2.less":".custom-content p {\n    margin: 0;\n}","src/demo/demo2.js":"import React from 'react'\nimport { Card } from '@alicloud/console-components'\nimport './demo2.less'\n\nconst commonProps = {\n  style: { width: 300 },\n  title: 'Title',\n  subTitle: 'Sub-title',\n  showTitleBullet: false,\n  showHeadDivider: false,\n}\n\nconst Demo2 = () => (\n  <div>\n    <Card {...commonProps} contentHeight=\"auto\">\n      <div className=\"custom-content\">\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n      </div>\n    </Card>\n    &nbsp;&nbsp;\n    <Card {...commonProps} contentHeight={200}>\n      <div className=\"custom-content\">\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n      </div>\n    </Card>\n  </div>\n)\n\nexport default Demo2\n","demoMeta.json":'{"entryPath":"src/demo/demo2.js"}'}}}]);
//# sourceMappingURL=43-14c0e49c288c725f119c.js.map