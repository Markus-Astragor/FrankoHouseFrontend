import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function FullNewsPiece() {
  type NewsData = {
    _id: string;
    Title: string;
    ShortDescription: string;
    Photos: string[];
    Timestamp: string;
  };

  const { id } = useParams();
  const [neededPost, setNeddedPost] = useState<NewsData>();
  console.log("id", id);

  useEffect(() => {
    axios
      .get(`https://www.server24.space/api/getPosts/${id}`)
      .then((res) => {
        console.log(res.data);
        setNeddedPost(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <p>{neededPost?.Title}</p>
    </div>
  );
}

export default FullNewsPiece;
