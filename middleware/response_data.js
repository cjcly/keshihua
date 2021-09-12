//处理业务逻辑的中间件，主要用来获取数据
const path = require("path");
const fileutils = require("../utils/file");
module.exports = async(ctx, next) => {
    const url = ctx.request.url;
    console.log(ctx);
    let filepath = url.replace("/api", "");
    filepath = "../data" + filepath + ".json";
    filepath = path.join(__dirname, filepath);
    //如果地址输入错误处理错误信息使用try  catch
    try {
        const ret = await fileutils.getFiledata(filepath);
        ctx.response.body = ret;
    } catch (err) {
        const errormsg = {
            msg: "系统找不到指定的文件",
        };
        ctx.response.body = JSON.stringify(errormsg);
    }
    await next();
};