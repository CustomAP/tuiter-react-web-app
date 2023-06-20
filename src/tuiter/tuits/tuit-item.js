import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitsThunk } from "../services/tuit-thunks";
const TuitItem = ({
  tuit = {
    topic: "Space",
    username: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "rick.png",
    liked: true,
    replies: 100,
    retuits: 101,
    likes: 10,
    handle: "@spacex",
    dislikes: 100,
    tuit: "Some long text of tuit",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitsThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={60}
            height={60}
            className="m-1 rounded-circle"
            src={`/images/rick.png`}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="fa fa-x float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <b>{tuit.username}</b> <i className="fa fa-check-circle ms-1"></i>{" "}
            {tuit.handle} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
        </div>
      </div>
      <TuitStats
        tuit={tuit}
        liked={tuit.liked}
        replies={tuit.replies}
        retuits={tuit.retuits}
        likes={tuit.likes}
        dislikes={tuit.dislikes}
      />
    </li>
  );
};
export default TuitItem;
