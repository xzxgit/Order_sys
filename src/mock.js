var axios = require('axios');
// 导入依赖的插件
var MockAdapter = require('axios-mock-adapter');

// 实例化对象
var mock = new MockAdapter(axios);

// 模拟请求接口和返回数据
// arguments (status == 响应状态, data == 响应数据, headers == 响应头部信息)
mock.onGet('/data').reply(200, {
    'product': {
        '1': {
            'name': 'asdad',
            'id': 'add',
            'description': 'asda',
            'options': [{'size': 12, 'price': 12}, {'size': 11, 'price': 11}]
        },
        '2':{
            'name': 'asdasdad',
            'id': 'sss',
            'description': 'asda',
            'options': [{'size': 12, 'price': 12}, {'size': 11, 'price': 11}]
        },
        '3':{
            'name': 'asddasdad',
            'id': 'sdad',
            'description': 'asda',
            'options': [{'size': 12, 'price': 12}, {'size': 11, 'price': 11}]
        },
        '4':{
            'name': '11',
            'id': '112',
            'description': 'asda',
            'options': [{'size': 12, 'price': 12}, {'size': 11, 'price': 11}]
        },
        '5':{
            'name': '2313',
            'id': '4545',
            'description': 'asda',
            'options': [{'size': 12, 'price': 12}, {'size': 11, 'price': 11}]
        }
    }
});

mock.onPost('/menu').reply((config)=>{
    let data = JSON.parse(config.data);
    return new Promise((resolve, reject)=>{
        resolve([200, { code: 200, msg: config.data }]);
    })
})
// 导出
export default mock;