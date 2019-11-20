import React, { useState, useEffect } from 'react';
import webSocket from 'socket.io-client';

const Chatroom = () => {
  const [ws, setWs] = useState(null)

  const connectWebSocket = () => {
    // 開啟
    setWs(webSocket('http://localhost:3000'));
  }

  const initWebSocket = () => {
    ws.on('getMessage', message => {
      console.log(message);
    })
  }

  const sendMessage = () => {
    ws.emit('getMessage', '只回傳給發送訊息的 client')
  }

  useEffect(() => {
    if (ws) {
      console.log('success connect!')
      initWebSocket()
    }
  }, [initWebSocket, ws])


  return (
    <div>
      <ul id="messages"/>
      <form>
        <input type="text" id="chat-input" name="chat-input"/>
        <input type='button' value='連線' onClick={connectWebSocket} />
        <input type='button' value="送出訊息" onClick={sendMessage} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chatroom;