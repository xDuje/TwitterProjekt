import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">

           <h2></h2> 

            <TwitterTweetEmbed tweetId={"872399536647536641"} />

            <TwitterTimelineEmbed 
                sourceType="profile" 
                screenName="jala_brat" 
                options={{height:400}} 
            />
            
            <TwitterShareButton
                url={"https://www.facebook.com/duje.duplancic.3"}
                options={{text: "#Dodajte duju na fejsu ", via: " Duje Duplancic " }}
            />


        </div>



    </div>
    );
}



export default Widgets
