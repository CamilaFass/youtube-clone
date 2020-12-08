import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import TuneOutlined from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://sm.ign.com/ign_br/screenshot/default/1f356a16-4821-4e31-9578-189d51793065-mandalorian-babyyoda-si_w98z.jpg"
        channel="Baby Yoda Test"
        verified
        subs="500k"
        noOfVideos={345}
        description="baby yoda appreciation channel"
      />
      <hr />
      <VideoRow
        views="1.4m"
        subs="549k"
        description="some description"
        timestamp="59 seconds ago"
        title="dummy title"
        image="https://yt3.ggpht.com/ytc/AAUvwni0x7pw_Gp49qYLBmuaJ9m1WehARK7XwVC0eg908w=s900-c-k-c0x00ffffff-no-rj"
      />
      <VideoRow
        views="1.4m"
        subs="549k"
        description="some description"
        timestamp="59 seconds ago"
        title="dummy title"
        image="https://yt3.ggpht.com/ytc/AAUvwni0x7pw_Gp49qYLBmuaJ9m1WehARK7XwVC0eg908w=s900-c-k-c0x00ffffff-no-rj"
      />
      <VideoRow
        views="1.4m"
        subs="549k"
        description="some description"
        timestamp="59 seconds ago"
        title="dummy title"
        image="https://yt3.ggpht.com/ytc/AAUvwni0x7pw_Gp49qYLBmuaJ9m1WehARK7XwVC0eg908w=s900-c-k-c0x00ffffff-no-rj"
      />
      <VideoRow
        views="1.4m"
        subs="549k"
        description="some description"
        timestamp="59 seconds ago"
        title="dummy title"
        image="https://yt3.ggpht.com/ytc/AAUvwni0x7pw_Gp49qYLBmuaJ9m1WehARK7XwVC0eg908w=s900-c-k-c0x00ffffff-no-rj"
      />
      <VideoRow
        views="1.4m"
        subs="549k"
        description="some description"
        timestamp="59 seconds ago"
        title="dummy title"
        image="https://yt3.ggpht.com/ytc/AAUvwni0x7pw_Gp49qYLBmuaJ9m1WehARK7XwVC0eg908w=s900-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
}

export default SearchPage;
