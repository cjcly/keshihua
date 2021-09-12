//设置响应头的中间件
module.exports = async (ctx, next) => {
  const content = "application/json charset=utf-8";
  ctx.set("Content-Type", content);
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  await next();
};
