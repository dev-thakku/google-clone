import React from "react";
import { Link } from "react-router-dom";

import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// eslint-disable-next-line
import response from "../response";
import Search from "../components/Search";
import SearchOptions from "../components/SearchOptions";

function SearchPage() {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);

  //MOCK API CALL
  // const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <header className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <SearchOptions />
        </div>
      </header>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}.
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultTop" href={item.link}>
                <a className="searchPage__resultLink" href={item.link}>
                  {item.displayLink}
                  <span className="arrow"></span>
                </a>
                <a className="searchPage__resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
