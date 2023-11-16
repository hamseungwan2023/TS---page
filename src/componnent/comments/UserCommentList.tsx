import "./userComment.css";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "ec2-54-226-163-236.compute-1.amazonaws.com:5000/api/";

interface IProps {
  userName: string;
  comment: string;
}

const UserCommentList = () => {
  let [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${url}/test`);
      // console.log(res.data[0].userName);
      // console.log(typeof res.data[0]);

      return setData(res.data);
    };
    getData();
  }, [data]);

  return (
    <div>
      <div>
        {data
          ? data?.map((e: any, i: any) => {
              return (
                <div>
                  <div className="commnetList">
                    <p className="userName"> {`${e.userName} :`}</p>
                    <p className="comment"> {e.comment}</p>
                  </div>
                  {/* <div className="userComment">{e.comment}</div> */}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default UserCommentList;
