import React from 'react'
import '../../assets/styles/commentSection.scss'
import {ReactComponent as IconReply} from '../../assets/images/icon-reply.svg'
import {ReactComponent as IconEdit} from '../../assets/images/icon-edit.svg'
import {ReactComponent as IconDelete} from '../../assets/images/icon-delete.svg'
import { EditComment } from './EditComment'

export const CommentSection = ({name, datePosted, replyComment, deleteComment, editComment, commentMade, avatarImage, replyingTo, you, replyOnClick, commentDeleteClick, showEdit, editCommentClick, hideEdit, updateComment, editingChange, editingText}) => {
  return (
    <div className='comment-section'>
            <div className='flex first-part'>
                <div className='flex comment-info'>
                    <img src={avatarImage} alt='amy' className='margin avatar'/>
                    <h4 className='margin'>{name}</h4>
                    <span className={you}>You</span>
                    <p>{datePosted}</p>
                </div>

                <div className='flex comment-edit'>
                    <div className={`${replyComment}`}>  
                        <button className='flex' onClick={replyOnClick}>
                            <IconReply className="margin icon-reply"/>
                            <h4>reply</h4>
                        </button> 
                    </div>

                    <div className={`${deleteComment}`}>
                        <button className='flex' onClick={commentDeleteClick}>
                            <IconDelete className='margin icon-delete'/>                       
                            <h4 id='delete-comment'>delete</h4>
                        </button> 
                    </div>
                    
                    <div className={`${editComment}`}>
                        <button className='flex' onClick={editCommentClick}>
                            <IconEdit className='margin icon-edit'/>
                            <h4>edit</h4>
                        </button>
                    </div>
                </div>
            </div>

            <div className='comment-made'>
                <p className={hideEdit}>
                    <span className='reply-name'>{replyingTo}</span>{commentMade}
                </p>
                <div className={`edit-comment ${showEdit}`}>
                    <EditComment value={"UPDATE"} updateComment={updateComment} editingChange={editingChange} editingText={editingText}/>
                </div>
            </div>
        </div>
  )
}
