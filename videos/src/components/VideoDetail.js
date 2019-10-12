import React from 'react';

const VideoDetail = ({video}) => {
    if(video ===null){
        return "search and select video";
    }
    else{

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; 
    
    return video===null? "search and select video" :(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        )
    }
};

export default VideoDetail;