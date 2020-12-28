import React,{useState, useEffect} from 'react'
import queryString from "query-string"
import io  from "socket.io-client"

let socket
var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity", 
  "timeout" : 10000,                  
  "transports" : ["websocket"]
};

const Chat = ({location}) => {
  const [name , setName] = useState("")
  const [room , setRoom] = useState("")

  useEffect(() => {
    const {name , room} = queryString.parse(location.search)
    socket = io("localhost:3333" , connectionOptions)
    setName(name)
    setRoom(room)
    console.log(socket)
    socket.emit("join" , {name , room} )
  },[])
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
