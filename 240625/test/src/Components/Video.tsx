import { FC } from "react";
import { Route, Routes, useParams } from "react-router-dom";

interface IProps {}

const Video: FC<IProps> = ({}) => {
  const params = useParams();
  console.log(params);

  return <div>비디오</div>;
};

export default Video;
