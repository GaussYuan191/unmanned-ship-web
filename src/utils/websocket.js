// import { showInfoMsg, showErrorMsg } from '@/utils/popInfo'
import ElementUI from 'element-ui';
function initWebSocket(param) {
    console.log(param)
    const wsUri = `ws://localhost:8080/v1/ship/ws/getData?sid=${param}`;
    this.socket = new WebSocket(wsUri)//这里面的this都指向vue
    this.socket.onerror = webSocketOnError;
    this.socket.onmessage = webSocketOnMessage;
    this.socket.onclose = closeWebsocket;
}
function webSocketOnError(e) {
    ElementUI.Notification({
        title: '',
        message: "WebSocket连接发生错误" + e,
        type: 'error',
        duration: 0,
    });
}
function webSocketOnMessage(e) {
    const data = JSON.parse(e.data);
    console.log(data.msgType === "INFO", data.msgType === "INFO")
    if (data.msgType === "INFO") {
        ElementUI.Notification({
            title: '',
            message: data.msg,
            type: 'success',
            duration: 3000,
        });

    } else if (data.msgType === "ERROR") {
        ElementUI.Notification({
            title: '',
            message: data.msg,
            type: 'error',
            duration: 0,
        });
    }
}
// 关闭websiocket
function closeWebsocket() {
    console.log('连接已关闭...')
}
function close() {
    this.socket.close() // 关闭 websocket
    this.socket.onclose = function (e) {
        console.log(e)//监听关闭事件
        console.log('关闭')
    }
}
function webSocketSend(agentData) {
    this.socket.send(agentData);
}
export default {
    initWebSocket, close
}