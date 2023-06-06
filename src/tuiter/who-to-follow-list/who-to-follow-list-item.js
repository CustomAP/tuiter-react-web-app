import React from "react";
const WhoToFollowListItem = ({
  who = {
    userName: "NASA",
    handle: "NASA",
    avatarIcon: "ashish.jpg",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 col-xl-3 col-xxl-2 col-lg-3 col-md-2 col-sm-2">
          <img
            className="rounded-circle"
            height={48}
            width={48}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-8 col-xl-7 col-xxl-8 col-lg-7 col-md-8 col-sm-8">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2 col-xl-2 col-xxl-2 col-lg-2 col-md-2 col-sm-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
