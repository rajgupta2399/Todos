import React from 'react'
import Video from './Video'

function VIdeoList({videos,deleteVideo,editVideo}) {
  return (
    <div>
        <div className="grid grid-cols-4">
            {videos.map((video)=>(
                <Video
                    key={video.id}
                    id={video.id}
                    ytThumbTitle={video.ytThumbTitle}
                    channelName={video.channelName}
                    views={video.views}
                    time={video.time}
                    deleteVideo={deleteVideo}
                    editVideo={editVideo}
                />
            ))}
        </div>
    </div>
  )
}

export default VIdeoList;