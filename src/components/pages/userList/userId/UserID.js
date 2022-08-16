import React from 'react'
import{useParams} from 'react-router-dom'
import './user.css'

const UserID = () => {
    const {id}=useParams()
  return (
    <div className='userId'>{id}</div>
  )
}

export default UserID