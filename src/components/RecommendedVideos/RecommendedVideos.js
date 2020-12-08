import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Dummy Title"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://static.wixstatic.com/media/72c0b2_e0eec32fd2ea478e82e1459c3224a623~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/72c0b2_e0eec32fd2ea478e82e1459c3224a623~mv2.jpg"
          channel="Dummy Channel"
          image="https://blog.bannersnack.com/wp-content/uploads/2018/01/Youtube-Channel-Template-Final-1.png"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
