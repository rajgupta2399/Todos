import React, { useContext, useEffect, useState } from "react";
import './AddVideo.css'
import ThemeContext from "../context/ThemeContext";

function AddVideo({addVideo,editableVideo,updateVideo}) {
  const inputTheme = useContext(ThemeContext);
  const [video,setVideo] = useState(
    {
      ytThumbTitle:"",
      channelName:"",
      views:"",
      time:"",
      // id:1,
  }
  )

  function handleChange(e){
    // console.log(e.target.name,e.target.value)
    setVideo({
      ...video,
      [e.target.name]:e.target.value,
    })
  }

  function handleSubmit(e){
    // e.preventDefault()
    if(editableVideo){
      updateVideo(video)
    }
    else{
      addVideo(video)
    }
      setVideo({
          ytThumbTitle:"",
          channelName:"",
          views:"",
          time:"",
          // id:1,
      })
  }

  useEffect(()=>{
    if(editableVideo){
        setVideo(editableVideo)
    }
},[editableVideo])

  return (
    <div>
      <div className={`flex flex-col ${inputTheme}`}>
        <div className="form">

          <input type="text" 
          name="ytThumbTitle"
          placeholder="Yt ThumbNail Heading"
          className={`w-[280px] h-12 border-black mb-2 outline-none border-b-2  bg-[#333] text-white ml-[41.5%] capitalize heading ${inputTheme}`}
          onChange={handleChange}
          value = {video.ytThumbTitle}
          />

          <input type="text" 
          name="channelName"
          placeholder="Channel Name"
          className={`w-[280px] h-12 border-black mb-2 outline-none border-b-2  bg-[#333] text-white ml-[41.5%] mt-1 capitalize ${inputTheme}`} 
          onChange={handleChange}
          value={video.channelName}

          />

          <input type="text" 
          name="views"
          placeholder="Views"
          className={`w-[280px] h-12 border-black mb-2 outline-none border-b-2  bg-[#333] text-white ml-[41.5%] mt-1 capitalize  ${inputTheme}`} 
          onChange={handleChange}
          value={video.views}

          />

          <input type="text" 
          name="time"
          placeholder="Time"
          className={`w-[280px] h-12 border-black mb-2 outline-none border-b-2  bg-[#333] text-white ml-[41.5%] mt-1  capitalize  ${inputTheme}`}
          onChange={handleChange}
          value={video.time}
          />

          <button
          className="rounded-full w-[150px] bg-green-600 h-10  hover:bg-blue-600 hover:text-white ml-[45%] mt-5 mb-8"
          onClick={handleSubmit}
          // setVideos([
          //   ...videos,
          //   {
          //     title: "react js tutorial",
          //     views: "10 Million",
          //     time: "6 years",
          //     verified: false,
          //     id: videos.length + 1,
          //   },
          // ]);
        >
          {editableVideo ? "Edit": "Add"} Video
        </button>

        </div>
      </div>
    </div>
  );
}

export default AddVideo;
