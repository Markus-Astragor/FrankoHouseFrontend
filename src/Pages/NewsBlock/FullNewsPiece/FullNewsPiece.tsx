import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";
import { BlockForLoader } from "../NewsBoard/NewsBoardStyle";

function FullNewsPiece() {
  type NewsData = {
    _id: string;
    title: string;
    shortDescription: string;
    photos: string[];
    timestamp: string;
  };

  const { id } = useParams();
  const [neededPost, setNeddedPost] = useState<NewsData>();
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${URLS["BASE-URL"]}/getPosts/${id}`)
      .then((res) => {
        console.log(res.data);
        setNeddedPost(res.data);
      })
      .catch((err) => console.log("err", err))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div>
      {loader ? (
        <BlockForLoader>
          <LoaderComponent />
        </BlockForLoader>
      ) : (
        <p>{neededPost?.title}</p>
      )}
    </div>
  );
}

export default FullNewsPiece;
