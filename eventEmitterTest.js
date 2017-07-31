var events = require("events");
var eventsEmitter = new events.EventEmitter();

// 定义事件
var connectHandler = function connected() {
    console.log("connect sucess");

    // 主动触发
    eventsEmitter.emit('data_reveived');
}

// 绑定事件方式1
eventsEmitter.on('connection', connectHandler);

// 绑定&定义事件方式2
eventsEmitter.on ('data_reveived', function() {
    console.log("Data recevied");
})

// 触发
eventsEmitter.emit('connection');