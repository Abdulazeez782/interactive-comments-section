import React from 'react'
import { Count } from './common/Count'
import { CommentSection } from './common/CommentSection'
import img1 from '../assets/images/avatars/image-amyrobson.png'
import img2 from '../assets/images/avatars/image-maxblagun.png'
import img3 from '../assets/images/avatars/image-ramsesmiron.png'
import img4 from '../assets/images/avatars/image-juliusomo.png'
import { ReplyComment } from './common/ReplyComment'
import { formatDistanceToNow } from 'date-fns'

export const Comments = ({comments, activeComment, replyClick, replyChange, replyText, replySubmit, commentDeleteClick, editCommentClick, editCommentId, updateComment, handleEditingText, editingText}) => {  
    const avatarImg = [
        {id: 1, image: img1},
        {id: 2, image: img2},
        {id: 3, image: img3},
        {id: 4, image: img4}
    ];
    
  return (   
        
            comments.map((comment) => (
                <div key={comment.id}>                    
                    <div className='flex comments border'>
                        <Count number={comment.score}/>
                        <CommentSection 
                        name={comment.user.username} 
                        datePosted={comment.createdAt} 
                        replyComment={(comment.user.username === "juliusomo") ? "" : "block"}
                        editComment={(comment.user.username === "juliusomo") ? "block" : ""} 
                        deleteComment={(comment.user.username === "juliusomo") ? "block" : ""} 
                        commentMade={comment.content} 
                        avatarImage={avatarImg.find(avatar => avatar.id === comment.id).image}
                        you={(comment.user.username === "juliusomo") ? "you" : ""}
                        replyOnClick={() => replyClick(comment.id)}
                        commentDeleteClick={() => commentDeleteClick(comment.idNew)}
                        editCommentClick={() => editCommentClick(comment.idNew)}
                        showEdit={(editCommentId === comment.idNew) ? "block" : ""}
                        hideEdit={(editCommentId === comment.idNew) ? "none" : ""}
                        updateComment={updateComment}
                        editingChange={handleEditingText}
                        editingText={editingText}
                        />               
                    </div>

                    <div className="reply-container">
                        {
                        comment.id === activeComment && <ReplyComment value={"REPLY"} 
                        replyChange={replyChange} replyText={replyText} replyOnClick={() => replySubmit(comment.id)}/> 
                        }
                    </div>
                    
                    {
                        comment.replies.map((reply) => (  
                            <div className='reply-container' key={reply.id}> 
                                                        
                                <div className='reply flex comments border'>
                                    <Count number={reply.score}/>
                                    <CommentSection 
                                        name={reply.user.username} 
                                        datePosted={reply.createdAt} 
                                        commentMade={reply.content} 
                                        replyingTo={`@${reply.replyingTo}`} 
                                        avatarImage={avatarImg.find(avatar => avatar.id === reply.id).image} 
                                        replyComment={(reply.user.username === "juliusomo") ? "" : "block"}  
                                        deleteComment={(reply.user.username === "juliusomo") ? "block" : ""} 
                                        editComment={(reply.user.username === "juliusomo") ? "block" : ""} 
                                        you={(reply.user.username === "juliusomo") ? "you" : ""}
                                        replyOnClick={() => replyClick(reply.id)}
                                        commentDeleteClick={() => commentDeleteClick(reply.idNew)}editCommentClick={() => editCommentClick(reply.idNew)}
                                        showEdit={(editCommentId === reply.idNew) ? "block" : ""}
                                        hideEdit={(editCommentId === reply.idNew) ? "none" : ""}
                                        updateComment={updateComment}
                                        editingChange={handleEditingText}
                                        editingText={editingText}
                                    />                                     
                                </div>
                                    <div className="reply-comment-container">
                                        {
                                            reply.id === activeComment &&
                                            <ReplyComment value={"REPLY"} 
                                            replyChange={replyChange} replyText={replyText} replyOnClick={() => replySubmit(comment.id)}/> 
                                        } 
                                    </div>                        
                                                            
                                
                            </div> 
                        ))
                    }
                </div>
            ))
           
  )
}
