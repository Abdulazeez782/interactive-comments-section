import './App.scss';
import { Main } from './components/Main';
import commentsData from './assets/data.json';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

function App() {
  const commentsInfo = commentsData.comments;
  const [comments, setComments] = useState((commentsInfo) => {
    const localValue = localStorage.getItem("COMMENTS");
    if(localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [newComment, setNewComment] = useState();
  const [textAreaValue, setTextAreaValue] = useState("");
  const [activeComment, setActiveComment] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [deleteCommentId, setDeleteCommentId] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("COMMENTS", JSON.stringify(comments));
  }, [comments])

  const handleInputChange = (e) => { 
    let content = e.target.value;
    setTextAreaValue(content);

    const comment = {
        id: 4, 
        idNew: comments.length + 1,
        user: {
          username: 'juliusomo'
        }, 
        createdAt: "now", 
        content: content, 
        score: 0,
        replies: []       
    }
    setNewComment(comment);         
  }

  const addComment = (newComment) => {
    if(newComment && typeof newComment === "object" && Object.keys(newComment).length > 0  && newComment.content.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment();
      setTextAreaValue("");
    }
  }

  const handleReplyClick = (commentId) => {      
    activeComment === commentId ? setActiveComment(null) : setActiveComment(commentId);
  }

  const handleReplyChange = (e) => {
    let reply = e.target.value;
    setReplyText(reply);      
  }  

  const replyCommentSubmit = (commentId) => {
    if(replyText.trim() === "") return;
    let replyingTo = "";

    comments.map(comment => {
      if(comment.id === commentId) {
        replyingTo = comment.user.username;
      }
      console.log(replyingTo);      
    })

    const reply = {
      id: 4,
      idNew: crypto.randomUUID(),
      createdAt: "now",
      score: 0,
      content: replyText,
      replyingTo: (activeComment === 3) ? "ramsmiron" : replyingTo,
      user: {
        username: 'juliusomo',
      }
    }

    console.log(reply.user.username);
    

    setComments((prevComment) => {      
      return prevComment.map(comment => 
        comment.id === commentId ? {
          ...comment, replies: [...comment.replies, reply]
        } : comment
      )
    })

    setReplyText("");
    setActiveComment(null);
  }

  const handleDeleteclick = (id) => { 
    setDeleteCommentId(id);      
  }

  const handleRemoveDelete = () => {
    setDeleteCommentId(null);
  }

  const deleteComment = () => {
    setComments(prevComment => 
      prevComment.map(comment => ({
        ...comment, replies: comment.replies.filter(reply => reply.idNew !== deleteCommentId)
      })).filter(comment => comment.idNew !== deleteCommentId)
    );

    setDeleteCommentId(null);
  }

  const editCommentClick = (id) => {  
    setEditCommentId(id);
    let content = "";

    comments.map(comment => {
      if(comment.idNew === id) {
        content = comment.content;
      }
    })

    comments.map(comment => {
      comment.replies.map(reply => {
        if(reply.idNew === id) {
          content = reply.content;
        }
      })
    })
    setEditingText(content);       
  }

  const handleEditingText = (e) => {
    setEditingText(e.target.value);
  }

  const updateComment = () => {
    setComments(prevComment =>
      prevComment.map(comment => ({
        ...comment,
        replies: comment.replies.map(reply =>
          reply.idNew === editCommentId
            ? { ...reply, content: editingText } 
            : reply
        ),
        content: comment.idNew === editCommentId
          ? editingText 
          : comment.content
      }))
    );

    setEditCommentId(null);
    setEditingText("");
  }

  return (
    <>
    <Main comments={comments} 
      handleChange={handleInputChange} 
      comment={newComment} 
      addComment={addComment} 
      textArea={textAreaValue} 
      activeComment={activeComment} 
      replyClick={handleReplyClick} 
      handleReplyChange={handleReplyChange} 
      replyText={replyText}
      replySubmit={replyCommentSubmit}
      commentDeleteClick={handleDeleteclick}
      deleteCommentId={deleteCommentId}
      removeDelete={handleRemoveDelete}
      deleteComment={deleteComment}
      editCommentClick={editCommentClick}
      editCommentId={editCommentId}
      updateComment={updateComment}
      handleEditingText={handleEditingText}
      editingText={editingText}
      />
      <div className={`modal ${(deleteCommentId) ? "block" : ""}`}></div>
    </>

  );
}

export default App;
