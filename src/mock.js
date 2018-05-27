var axios = require('axios');
// 导入依赖的插件
var MockAdapter = require('axios-mock-adapter');

// 实例化对象
var mock = new MockAdapter(axios);

// 模拟请求接口和返回数据
// arguments (status == 响应状态, data == 响应数据, headers == 响应头部信息)
mock.onGet('/data').reply(200, {
  users: [
    { id: 1, name: 'John Smith' }
  ]
});

mock.onPost('/add').reply((config)=>{
    let data = JSON.parse(config.data);
    return new Promise((resolve, reject)=>{
        resolve([200, { code: 200, msg: config.data }]);
    })
})
// 导出
export default mock;