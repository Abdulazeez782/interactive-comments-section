import React from 'react'
import { Comments } from './Comments'
import { Reply } from './common/Reply'
import currentUser from '../assets/images/avatars/image-juliusomo.png'
import { DeleteComment } from './DeleteComment'

export const Main = ({comments, handleChange, comment, addComment, textArea, activeComment, replyClick, handleReplyChange, replyText, replySubmit, commentDeleteClick, deleteCommentId, removeDelete, deleteComment, editCommentClick, editCommentId, updateComment, handleEditingText, editingText}) => {  
  return (
    <main>
        <Comments 
          comments={comments} 
          activeComment={activeComment} 
          replyClick={replyClick}
          replyChange={handleReplyChange} 
          replyText={replyText}
          replySubmit={replySubmit}
          commentDeleteClick={commentDeleteClick}
          editCommentClick={editCommentClick}
          editCommentId={editCommentId}
          updateComment={updateComment}
          handleEditingText={handleEditingText}
          editingText={editingText}
          />

        <div className='user-reply-container'>
          <Reply value={"SEND"} userAvatar={currentUser} handleChange={handleChange} comment={comment} addComment={addComment} textArea={textArea}/>
        </div>

        <div className={`delete-comment-container border ${(deleteCommentId) ? "block" : ""}`}>
          <DeleteComment removeDelete={removeDelete} deleteComment={deleteComment}/>
        </div>
    </main>
  )
}
