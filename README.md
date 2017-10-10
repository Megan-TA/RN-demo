# RN-demo
调用豆瓣电影api 利用create-react-native-app脚手架搭建环境
> 记录遇到的一些问题
1. create-react-native-app 命令行目前不支持设定自定义端口（如 --port=5389)等，因此 需要手动改写源代码，具体需要改写的文件位于 node_modules/xdl/build/Project.js 中， 全局搜索 19000、19001，并将其分别改为自己想要的端口
2. 查看 demo 前需要安装 Expo 应用
3. create-react-native-app 目前暂不支持 npm@5+，如果 npm 版本过高，可通过 npm install -g npm@4.6 来降级
