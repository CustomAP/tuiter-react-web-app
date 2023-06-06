import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
const TuitItem = ({
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
    handle: "@spacex",
    tuit: "Some long text of tuit",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            width={48}
            height={48}
            className="m-1 rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-11">
          <div>
            <i
              className="fa fa-x float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <b>{tuit.userName}</b> <i class="fa fa-check-circle ms-1"></i>{" "}
            {tuit.handle} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
        </div>
      </div>
      <TuitStats
        liked={tuit.liked}
        replies={tuit.replies}
        retuits={tuit.retuits}
        likes={tuit.likes}
      />
    </li>
  );
};
export default TuitItem;
