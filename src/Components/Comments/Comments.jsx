import React, { useState } from "react";
import "./Comments.css";
import { VscAccount } from "react-icons/vsc";

import userprofile from "../Assests/user-profile.png";



const Comments = ({ title,username, email, text }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };
  
  return (
    <div className="comments">
      <h1>{title}</h1>
      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>
    



      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>


      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>


      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>


      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>



      <div className="commInfo">
           <div className="userName">
           <VscAccount className="VscAccount" />
           <h2>{username} <br/><h4>{email}</h4></h2>
           </div>

           <div className="commentBody">
            <p>{text}</p>
          </div>
          
        <div className="comment-actions">
        <span onClick={toggleCommentInput}> <i class="bi bi-chat-left-fill"/> 9</span>
        <span> <i class="bi bi-hand-thumbs-up-fill"/>120</span>
        <span> <i class="bi bi-hand-thumbs-down-fill"/>5</span>
        </div>
       
        {showCommentInput && (
        <div className="addcomment">
            <img src={userprofile} alt="" />
            <input type="text" placeholder="+ Add comment ........" />
          </div>
        )}
      </div>
      </div>
 
  );
};

export default Comments;