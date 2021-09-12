//服务器入口文件

//1.创建Koa实例对象
const koa = require("koa");
const app = new koa();

//2.绑定中间件
//(1).第一层中间件(计算服务器耗时的中间件)
const durations = require("./middleware/response_duration");
app.use(durations);

//(2).第二层中间件
const header = require("./middleware/response_header");
app.use(header);

//(3)第三层中间件
const data = require("./middleware/response_data");
app.use(data);

//3.绑定端口号
app.listen(3000);
console.log("已经启动成功");
const webSocketService=require('./service/socket');
// 开启服务端的监听, 监听客户端的连接
// 当某一个客户端连接成功之后, 就会对这个客户端进行message事件的监听
webSocketService.listen()