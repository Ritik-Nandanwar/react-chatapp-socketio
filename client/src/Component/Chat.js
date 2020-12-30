import React, { useState, useEffect } from 'react'
import queryString from "query-string"
import io from "socket.io-client"

let socket
var connectionOptions = {
  "force new connection": true,
  "reconnectionAttempts": "Infinity",
  "timeout": 10000,
  "transports": ["websocket"]
};
const Chat = ({ location }) => {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    socket = io("localhost:3333", connectionOptions)
    setName(name)
    setRoom(room)
    console.log(socket)
    socket.emit("join", { name, room })
  }, [location.search])
  useEffect(() => {
    socket.on('message', (message) => {
      setMessage([...messages, message])
    })
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(""))
    }
  }
  console.log(message, messages)
  return (
    <div>
      <div className="container">
        <div className="message-area">

        </div>
        <input type="text" value={message}
          onChange={e => { setMessage(e.target.value) }}
          onKeyPress={e =>
            e.key === "Enter" ? sendMessage(e) : null
          } />
      </div>
    </div>
  )
}

export default Chat
