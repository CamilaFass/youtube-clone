import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, timestamp, views, channelImage }) {
  //   another option would be to just write props inside () above and below put
  //   const {image, title, etc} = props
  //   and below would use {props.image} instead of {image} but makes code a bit longer

  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__Avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
