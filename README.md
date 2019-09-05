###

1. npm init
2. 配置 babel 可以使用 es 语法
   - 添加 es2015 规则： npm install --save-dev babel-preset-es2015
   - 添加 ES7 规则：（最新规则） npm install --save-dev babel-preset-stage-0
   - 创建.babelrc 文件，并把规则加入：
   ```
   {
   "presets": [
     "es2015",
     "stage-0"
   ],
   "plugins": []
   }
   ```
   - 安装 babel-cli，可以在命令行使用 babel 编译文件 npm install babel-cli --save-dev
   - 在 script 里面添加命令 "build": "babel src -d lib"， 创建 src 文件夹
   - 使用 babel-polyfill 为了使用一些新的API， Promoise/Generager 等
   - 使用 babel-register 把引入的文件转码
