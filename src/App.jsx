// import { useEffect, useState } from "react"
// import Vite from "./Components/vite"
// import ReactApexChart from "react-apexcharts"
import "./index.css";
// import Counter from "./Components/Counter";
// import Cards from "./Components/Cards";
// import Colorchanger from "./Components/Colorchanger";
// import Video from "./Video";
// import obj from "./Data";
// import { useState, useEffect, useReducer } from "react";
// import "./App.css";
// import SearchIcon from "./Search.svg";
// import MovieCard from "./MovieCard";
// import AddNewVideo from "./Components/AddNewVideo";
// import VideoList from "./VideoList";
import { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Video from "./components/Video";
import obj from "../src/data/data"
import VIdeoList from "./components/VIdeoList";
import AddVideo from "./components/AddVideo";

function App() {
  // console.log(obj)
  const [videos,setVideos] = useState(obj)
  const [editableVideo, setEditableVideo] = useState(null)


  const [enabled, setEnabled] = useState(false);
  const themeContext = useContext(ThemeContext);
  const [mode, setMode] = useState("dark");


  function addVideo(video){
    setVideos([
      ...videos,
      {...video,id:videos.length+1}
    ])
  }

  function deleteVideo(id){
    // console.log(videos.filter((video)=>video.id!==id))
      setVideos(videos.filter((video)=>video.id!==id))
  }

  function editVideo(id){
    setEditableVideo(videos.find((video)=>video.id === id))
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    setEditableVideo(null)
    setVideos(newVideos)
  }



  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`}>
        <div className="flex flex-row">
          <div className={`${mode}`}>
            <div className="p-5 border-2 border-sky-500">
              <Switch
                checked={enabled}
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                onChange={setEnabled}
                className={`${enabled ? "bg-[#1a202c]" : "bg-white"}
     relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[40.5px]": "translate-x-0 bg-[#1a202c]"
                  }
       pointer-events-none inline-block h-[38px] w-[34px] transform rounded-full bg-[#d8e2dc] shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
          <div
            className={`youtube-crud uppercase text-3xl font-semibold  ${mode} mt-5  ml-[35%] `}
          >
            Youtube crud
          </div>

        </div>
          {/*<Video/>*/}
          <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}/>
        <VIdeoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
