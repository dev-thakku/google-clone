import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./SearchOptions.css";

function SearchOptions() {
  return (
    <div className="searchPage__options">
      <div className="searchPage__optionsLeft">
        <div className="searchPage__option">
          <SearchIcon /> <Link to="/search">All</Link>
        </div>
        <div className="searchPage__option">
          <DescriptionIcon /> <Link to="/news">news</Link>
        </div>
        <div className="searchPage__option">
          <ImageIcon />
          <Link to="/images">Images</Link>
        </div>
        <div className="searchPage__option">
          <LocalOfferIcon />
          <Link to="/shopping">Shopping</Link>
        </div>
        <div className="searchPage__option">
          <RoomIcon />
          <Link to="/maps">Maps</Link>
        </div>
        <div className="searchPage__option">
          <MoreVertIcon />
          <Link to="/more">More</Link>
        </div>
      </div>

      <div className="searchPage__optionsRight">
        <div className="searchPage__option">
          <Link to="/settings">Settings</Link>
        </div>
        <div className="searchPage__option">
          <Link to="/tools">Tools</Link>
        </div>
      </div>
    </div>
  );
}

export default SearchOptions;
