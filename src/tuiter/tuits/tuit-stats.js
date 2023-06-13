import React from "react";
import { updateTuitThunk } from "../services/tuit-thunks";
import { useDispatch } from "react-redux";
const TuitStats = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "rick.png",
    liked: true,
    replies: 100,
    retuits: 101,
    likes: 10,
    dislikes: 100,
    handle: "@spacex",
    tuit: "Some long text of tuit",
  },
  liked = true,
  replies = 101,
  retuits = 432,
  likes = 100,
  dislikes = 101,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="row mt-2">
      <div className="col col-2"></div>
      <div className="col col-2">
        <i className="fa fa-comment ms-1 me-1"></i> {replies}
      </div>
      <div className="col col-2">
        <i className="fa fa-retweet ms-1 me-1"></i> {retuits}
      </div>

      <div className="col col-2">
        <i
          className="fa fa-heart ms-1 me-1"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, likes: likes + 1 }))
          }
        ></i>{" "}
        {likes}
      </div>

      <div className="col col-2">
        <i
          className="fa fa-thumbs-down ms-1 me-1"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, dislikes: dislikes + 1 }))
          }
        ></i>{" "}
        {dislikes}
      </div>

      <div className="col col-2">
        <i className="fa fa-share ms-1 me-1"></i>
      </div>
    </div>
  );
};

export default TuitStats;
