import React from 'react';
import '../../assets/styles/reply.scss';
import userAvatar from '../../assets/images/avatars/image-juliusomo.png';

export const ReplyComment = ({value, replyOnClick, replyChange, replyText}) => {    
  return (
    <div className='user-reply flex border'>
        <img src={userAvatar} alt='user-avatar' className='margin'/>
        <textarea className='margin border' onChange={replyChange} value={replyText}/>
        <button className='border' onClick={replyOnClick}>{value}</button>
    </div>
  )
}
