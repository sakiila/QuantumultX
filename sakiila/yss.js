var obj = JSON.parse($response.body);

var timeNow = new Date();
var timeNowStr = timeNow.getFullYear() + "-" + (("0" + (timeNow.getMonth() + 1)).slice(-2)) + "-" + timeNow.getDate() + " 03:27";

obj.data.records[0].显示时间 = timeNowStr;

$done({body: JSON.stringify(obj)});