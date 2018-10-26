//引入events 模組
var events = require('events');
//建立 eventEmitter 物件
var eventEmitter = new events.EventEmitter();

//建立事件處理程序
var connectHandler = function connected(){
  console.log('連線成功');

  //觸發data_received事件
  eventEmitter.emit('data_received');
}

//綁定connection事件處理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函數綁定 date_received事件
eventEmitter.on('data_received',function (){
  console.log("data接收成功");
});
//觸發connection事件
eventEmitter.emit('connection');

console.log('end main');