import React from "react";

class Subheader extends React.Component {
  render() {
    if (this.props.visible) {
      return null;
    }
    return (
      <div className="sub-header">
        <h1 className="tagline">Be the face of your favorite brand</h1>
        <p className="tagline__sm">
          ZeloBand aims to be India’s largest Campus Ambassador Platform
          enabling Brand Marketers to recruit and leverage student ambassador
          networks for augmenting and scaling brand presence across online and
          offline worlds.
        </p>

        {/* <div className="search__block">
          <div className="search__box">
            <svg
              className="search__box--logo"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#A1A1A1"
                d="M5.8 11.7c-1.6 0-3-.6-4.1-1.7S0 7.4 0 5.8s.6-3 1.7-4.1C2.8.6 4.3 0 5.8 0s3 .6 4.1 1.7c2.3 2.3 2.3 6 0 8.3-1 1.1-2.5 1.7-4.1 1.7zM5.8 1c-1.3 0-2.5.5-3.4 1.4C1.5 3.3 1 4.5 1 5.8s.5 2.5 1.4 3.4c.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4c1.9-1.9 1.9-5 0-6.9C8.4 1.5 7.1 1 5.8 1z"
              />
              <path
                fill="#A1A1A1"
                d="M15.5 16c-.1 0-.3 0-.3-.1L9.3 10c-.2-.2-.2-.5 0-.7s.5-.2.7 0l5.9 5.9c.2.2.2.5 0 .7-.1.1-.3.1-.4.1z"
              />
            </svg>
            <input
              className="search__box--input"
              type="text"
              placeholder="Keyword or title"
            />
          </div>
          <button className="search--btn">SEARCH</button>
        </div> */}
      </div>
    );
  }
}

export default Subheader;
