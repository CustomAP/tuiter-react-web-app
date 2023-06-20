import React, { useState } from "react";
import { HiOutlineGif } from "react-icons/hi2";
import { AiOutlinePicture } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createTuitThunk } from "./services/tuit-thunks";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
      topic: "Space",
      username: "SpaceX",
      time: "2h",
      title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
      image: "rick.png",
      liked: true,
      replies: 0,
      retuits: 0,
      likes: 0,
      dislikes: 0,
      handle: "@spacex",
    };
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
    console.log(whatsHappening);
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img
          src="/images/ashish.jpg"
          width={60}
          height={60}
          className="rounded-circle"
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <HiOutlineGif className="me-3" />
            <MdFormatListBulleted className="me-3" />
            <BsEmojiSmile className="me-3" />
            <TbCalendarStats className="me-3" />
            <HiOutlineLocationMarker className="me-3" />
            <BiBold className="me-3" />
            <BiItalic className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
