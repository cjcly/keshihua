//读取文件工具方法
const fs = require("fs");
module.exports.getFiledata = (filepath) => {
  return new Promise((res, err) => {
    fs.readFile(filepath, "utf-8", (error, data) => {
      error ? err(error) : res(data);
    });
  });
};
