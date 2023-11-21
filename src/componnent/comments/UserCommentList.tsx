import "./userComment.css";
import { useEffect, useState } from "react";
import axios from "axios";
interface IProps {
  userName: string;
  comment: string;
}

const UserCommentList = () => {
  // console.log(1);
  let [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "http://ec2-3-93-0-198.compute-1.amazonaws.com:5000/api/test"
      );
      // console.log("res.data", res.data);
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
                    <p className="userName"> {`${e.userName}`}</p>
                    <p className="comment"> :{e.comment}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {}
    </div>
  );
};

export default UserCommentList;
