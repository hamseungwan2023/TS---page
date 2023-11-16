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
        "ec2-54-226-163-236.compute-1.amazonaws.com:5000/api/",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });

    // await axios
    //   .post("http://localhost:5000/", {
    //     userName: userName,
    //     comment: getComment,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  };

  const commentOnSubmit = (e: any) => {
    e.preventDefault();
    // if (cLength >= 20 == uLength >= 8) {
    //   alert("이름은 3~8글자 이하로, 댓글은 2~20자 이하로해주세요");
    //   setGetComment("");
    //   setUserName("");
    // }
    if (uLength >= 8 && uLength < 3) {
      alert("이름은 3~8글자만 써주세요");
      return setUserName("");
    }
    if (cLength >= 20 && cLength < 2) {
      alert("2~20글자 써주세요");
      return setGetComment("");
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