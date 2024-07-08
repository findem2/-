import { FC } from "react";
import { Route, Routes, useParams } from "react-router-dom";

interface IProps {}

const Review: FC<IProps> = ({}) => {
  const params = useParams();
  console.log(params);

  return <div>리뷰</div>;
};

export default Review;
