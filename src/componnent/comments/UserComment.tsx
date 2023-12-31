import { useState, useEffect } from "react";
import "./userComment.css";
import UserCommentList from "./UserCommentList";
import axios from "axios";

const UserComment = () => {
  const [getComment, setGetComment] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [userName, setUserName] = useState<
    string | number | readonly string[] | undefined
  >("");

  const [cLength, setCLength] = useState<number>(0);
  const [uLength, setULength] = useState<number>(0);

  useEffect(() => {}, []);

  const commentOnChange = (e: any) => {
    setGetComment(e.target.value);
    if (getComment) {
      setCLength(getComment?.toString().length);
    }
  };

  const userNameOnChange = (e: any) => {
    setUserName(e.target.value);
    if (userName) {
      setULength(userName?.toString().length);
    }
  };
  const postComment = () => {
    let data = {
      userName: userName,
      comment: getComment,
    };
    axios
      .post(
        "http://ec2-3-93-0-198.compute-1.amazonaws.com:5000/api",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log("res", res);
      });
  };

  const commentOnSubmit = (e: any) => {
    e.preventDefault();
    if (cLength === 0 || uLength === 0) {
      alert("글을 작성하세요");
      return false;
    }
    if (cLength > 20 || uLength > 8) {
      alert("제한 글자를 초과 하셨습니다");
      setGetComment("");
      setUserName("");
      return false;
    }
    postComment();
    setGetComment("");
    setUserName("");
  };
  return (
    <div className="commentBox">
      <div className="inputBox">
        <input
          className="userName"
          type="text"
          value={userName}
          placeholder="이름을 작성하세요"
          onChange={userNameOnChange}
        ></input>
        <input
          className="userComment"
          type="text"
          value={getComment}
          onChange={commentOnChange}
          placeholder="댓글을 작성하세요"
        ></input>
      </div>
      <button type="submit" onClick={commentOnSubmit}>
        등록
      </button>
      <UserCommentList />
    </div>
  );
};

export default UserComment;
