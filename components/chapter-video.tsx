"use client";

import { Chapter } from '@prisma/client';
import YouTube, { YouTubeProps } from 'react-youtube';
var getYoutubeID = require('get-youtube-id');

interface ChapterVideoFormProps {
    chapter: Chapter
}

const ChapterVideo = (
    { chapter }: ChapterVideoFormProps
) => {
    const videoID = getYoutubeID(chapter?.videoUrl || "");
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: "520",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>
            <div className="relative aspect-video mt-3">
                <YouTube videoId={getYoutubeID(chapter?.videoUrl)} opts={opts} onReady={onPlayerReady}></YouTube>
            </div>
        </div>
    );
}

export default ChapterVideo;