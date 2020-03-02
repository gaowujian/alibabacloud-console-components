(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{"6BE3":function(e,n,t){"use strict";t.r(n),t.d(n,"demoMeta",(function(){return u})),t.d(n,"_demoSrcFiles",(function(){return c}));var o=t("mXGw"),a=t.n(o),m=t("BgHK"),r=m.Menu.SubMenu,l=m.Menu.Item;n.default=function(){return a.a.createElement("div",null,a.a.createElement(m.Menu,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},a.a.createElement(r,{key:"0",label:"Sub menu 1"},a.a.createElement(l,{key:"0-0"},"Sub option 1"),a.a.createElement(l,{key:"0-1"},"Sub option 2"),a.a.createElement(l,{key:"0-2"},"Sub option 3")),a.a.createElement(r,{key:"1",label:"Sub menu 2"},a.a.createElement(l,{key:"1-0"},"Sub option 1"),a.a.createElement(l,{key:"1-1"},"Sub option 2"),a.a.createElement(l,{key:"1-2"},"Sub option 3")),a.a.createElement(r,{key:"2",label:"Sub menu 3"},a.a.createElement(l,{key:"2-0"},"Sub option 1"),a.a.createElement(l,{key:"2-1"},"Sub option 2"),a.a.createElement(l,{key:"2-2"},"Sub option 3")),a.a.createElement(r,{key:"3",label:"Sub menu 4"},a.a.createElement(l,{key:"3-0"},"Sub option 1"),a.a.createElement(l,{key:"3-1"},"Sub option 2"),a.a.createElement(l,{key:"3-2"},"Sub option 3"))))};var u={zhName:"内连菜单展开模式",zhDesc:"通过设置 openMode 为 'single'，可以让菜单同时只能展开一个内连子菜单，默认为可以同时展开多个。"},c={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo2";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/demo/demo2.js":'import React from \'react\'\nimport { Menu } from \'@alicloud/console-components\'\n\nconst { SubMenu, Item } = Menu\n\nconst Demo2 = () => (\n  <div>\n    <Menu defaultOpenKeys="1" className="my-menu" openMode="single">\n      <SubMenu key="0" label="Sub menu 1">\n        <Item key="0-0">Sub option 1</Item>\n        <Item key="0-1">Sub option 2</Item>\n        <Item key="0-2">Sub option 3</Item>\n      </SubMenu>\n      <SubMenu key="1" label="Sub menu 2">\n        <Item key="1-0">Sub option 1</Item>\n        <Item key="1-1">Sub option 2</Item>\n        <Item key="1-2">Sub option 3</Item>\n      </SubMenu>\n      <SubMenu key="2" label="Sub menu 3">\n        <Item key="2-0">Sub option 1</Item>\n        <Item key="2-1">Sub option 2</Item>\n        <Item key="2-2">Sub option 3</Item>\n      </SubMenu>\n      <SubMenu key="3" label="Sub menu 4">\n        <Item key="3-0">Sub option 1</Item>\n        <Item key="3-1">Sub option 2</Item>\n        <Item key="3-2">Sub option 3</Item>\n      </SubMenu>\n    </Menu>\n  </div>\n)\n\nexport default Demo2\n\nexport const demoMeta = {\n  zhName: \'内连菜单展开模式\',\n  zhDesc: `通过设置 openMode 为 \'single\'，可以让菜单同时只能展开一个内连子菜单，默认为可以同时展开多个。`,\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo2.js"}'}}}]);
//# sourceMappingURL=168-e3de3be2fa93a6d74de6.js.map