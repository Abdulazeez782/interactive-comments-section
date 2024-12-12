import React from 'react'
import '../../assets/styles/reply.scss'

export const Reply = ({value, userAvatar, handleChange, comment, addComment, textArea}) => {
  return (
    <div className='user-reply flex border'>
        <img src={userAvatar} alt='user-avatar' className='margin'/>
        <textarea className='margin border' value={textArea} onChange={handleChange} placeholder='Add a comment...'/>
        <button className='border' onClick={() => addComment(comment)}>{value}</button>
    </div>
  )
}
