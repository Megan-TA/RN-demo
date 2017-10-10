# RN-demo
调用豆瓣电影api 利用create-react-native-app脚手架搭建环境
create-react-native-app 命令行目前不支持设定自定义端口（如 --port=5389)等，因此 需要手动改写源代码，具体需要改写的文件位于 node_modules/xdl/build/Project.js 中， 全局搜索 19000、19001，并将其分别改为自己想要的端口
