import React from 'react'
import '../../assets/styles/reply.scss';
import '../../assets/styles/editComment.scss';

export const EditComment = ({value, editingChange, editingText, updateComment}) => {
  return (
    <div className='user-reply flex border edit-comment-container'>
        <textarea className='margin border' onChange={editingChange} value={editingText}/>
        <button className='border' onClick={updateComment}>{value}</button>
    </div>
  )
}
