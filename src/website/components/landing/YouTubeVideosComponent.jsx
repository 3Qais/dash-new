// YouTubeVideosComponent.tsx

import React, { useEffect, useState } from "react";

import { useRouteLoaderData } from "@remix-run/react";

function YoutubeItem({ video }) {
  return (
    <div key={video.id.videoId}>
      <h2 className=" mb-2 text-center text-base text-[#a1a0a0]">
        {video.snippet.title}
      </h2>

      <iframe
        className="rounded-md"
        width="350"
        height="220"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        allowFullScreen
        title={video.snippet.title}
      ></iframe>
    </div>
  );
}

const YouTubeVideosComponent = (apiKey) => {
  const { env } = useRouteLoaderData("root");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchYouTubeVideos() {
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${env.YOUTUBE_CHANNEL_ID}&maxResults=10&key=${env.YOUTUBE_API_KEY}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }

    fetchYouTubeVideos();
  }, [apiKey, env]);

  return (
    <div className="mt-2 flex max-h-[500px] flex-col gap-4 overflow-scroll rounded-md border border-[#333333] bg-[#111111] p-4">
      {videos &&
        videos.map(
          (video, index) =>
            video.id.kind === "youtube#video" && (
              <YoutubeItem video={video} key={index} />
            ),
        )}
    </div>
  );
};

export default YouTubeVideosComponent;
