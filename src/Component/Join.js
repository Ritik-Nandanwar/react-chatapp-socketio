import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  const [name , setName] = useState("")
  const [room , setRoom] = useState("")
  
  return (
    <div>
      <div className="container grey lighten-3" style={{justifyContent:"center" , margin: "30% auto" , padding:"5rem"}}>
        <form action="">
          <h4 className="green-text">join room</h4>
          <input onChange={(e) => {
            setName(e.target.value)
          }} required type="text" className="input-field"placeholder="Enter your name"/>
          <input onChange={(e) => {
            setRoom(e.target.value)
          }} required type="text" className="input-field" placeholder="Enter room name"/>
          <Link type="submit" className="btn blue white-text right" to={`/chat?name=${name}&room=${room}`}>Join</Link>
        </form>
        
      </div>
    </div>
  )
}

export default Join
