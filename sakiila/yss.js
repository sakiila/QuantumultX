var obj = JSON.parse($response.body);

let key = '"显示时间":"2022-07-01 04:36"'

// if (obj.data.match(/"显示时间":"(\d{4}-\d{2}-\d{2} \d{2}:\d{2})"/)) {
//     obj.data = key;
// }

obj['显示时间'] = '2022-07-01 04:36';

$done({body: JSON.stringify(obj)});