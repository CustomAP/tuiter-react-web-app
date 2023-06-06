import React from "react";
const TuitStats = ({
  liked = true,
  replies = 101,
  retuits = 432,
  likes = 100,
}) => {
  return (
    <div className="row mt-2">
      <div className="col col-1"></div>
      <div className="col col-2">
        <i class="fa fa-comment ms-1 me-1"></i> {replies}
      </div>
      <div className="col col-2">
        <i class="fa fa-retweet ms-1 me-1"></i> {retuits}
      </div>

      <div className="col col-2">
        <i class="fa fa-heart ms-1 me-1"></i> {likes}
      </div>

      <div className="col col-2">
        <i class="fa fa-share ms-1 me-1"></i>
      </div>
    </div>
  );
};

export default TuitStats;
