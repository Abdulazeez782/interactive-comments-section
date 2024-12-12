import React from 'react'
import '../assets/styles/deleteComment.scss'

export const DeleteComment = ({removeDelete, deleteComment}) => {
  return (
    <div>
        <h4 className='margin-bottom'>Delete Comment</h4>
        <p className='margin-bottom'>Are you sure you want to delete this comment? This will remove the comment and cannot be undone</p>
        <div>
            <button className='button-cancel border' onClick={removeDelete}>NO, CANCEL</button>
            <button className='button-delete border' onClick={deleteComment}>YES, DELETE</button>
        </div>
    </div>
  )
}
