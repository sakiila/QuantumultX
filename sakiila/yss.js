let obj = JSON.parse($response.body);

let timeNow = new Date();
const dateNow = timeNow.getFullYear() + "-" + (("0" + (timeNow.getMonth() + 1)).slice(-2)) + "-" + (("0" + timeNow.getDate()).slice(-2));

obj.data.records[0].检测日期 = dateNow + " 03:27:56";
obj.data.records[0].显示时间 = dateNow + " 03:27";

$done({body: JSON.stringify(obj)});