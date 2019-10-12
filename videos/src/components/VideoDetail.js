import React from 'react';

const VideoDetail = ({video}) => {
    return video===null? "search and select video" :(
        <div>
            {video.snippet.title}
        </div>
        )
};

export default VideoDetail;