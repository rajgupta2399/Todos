import React, { useContext } from "react";
import "./Video.css"
import ThemeContext from "../context/ThemeContext";

function Video({ytThumbTitle="Learn React In One Video",channelName="Javascript Mastery",views="100K",time="1 Year",id,deleteVideo,editVideo}) {
  const theme = useContext(ThemeContext)
  const themeButton  = useContext(ThemeContext)
  return (
    <div>
      <div className="flex flex-col ml-10 w-[310px] mb-4">
        <div className="del-edit flex flex-row">
          <button
            className={`bg-red-600 text-white font-semibold text-sm p-2 w-10 rounded-2xl ml-1 del ${theme}`}
            onClick={() => {
              deleteVideo(id);
            }}
          >
            X
          </button>
          <button
            className={`bg-green-600 text-sm text-white font-semibold p-2 w-16 rounded-3xl ml-[190px] edit ${themeButton}`}
            onClick={() => {
              editVideo(id);
            }}
          >
            Edit
          </button>
        </div>
        <div className="yt-thumbnail-img">
          <img src={`https://picsum.photos/id/${id}/300/300`} alt="" />
        </div>
        <div className="yt-title text-center mt-1">{ytThumbTitle}</div>
        <div className="channel-logo-name flex flex-row ">
            <div className="channel-logo ">
                <img src={`https://source.unsplash.com/random/200x200?sig=${id}`} alt=""  className=" w-10 rounded-full ml-2 mr-6"/>
            </div>
            <div className="channel-name pt-2">
                {channelName}
            </div>
        </div>
        <div className="flex flex-row justify-around mb-2">
            <div className="views font-sans text-sm">{views}</div>
            <div className="time font-sans text-sm">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Video;
