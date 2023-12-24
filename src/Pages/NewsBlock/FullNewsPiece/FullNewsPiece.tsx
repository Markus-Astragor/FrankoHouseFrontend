import React from "react";
import { useParams } from "react-router";
import { fullData } from "../NewsBoard/mocks";

function FullNewsPiece() {
  const { id } = useParams();
  const neededFullPieceNews = fullData.find((pieceOfNews) => pieceOfNews.id === Number(id));
  console.log("neededFullPieceNews", neededFullPieceNews);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{neededFullPieceNews?.title}</h3>
      <p style={{ textAlign: "center" }}>{neededFullPieceNews?.description}</p>
      <p style={{ textAlign: "center" }}>{neededFullPieceNews?.fullDescription}</p>
    </div>
  );
}

export default FullNewsPiece;
