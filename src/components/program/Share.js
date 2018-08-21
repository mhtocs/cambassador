/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from "react";
import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon
} from "react-share";

import "./Share.css";

class Share extends Component {
  render() {
    const { shareUrl } = this.props;
    const { title } = this.props;

    return (
      <div className="Share__container">
        <div className="Share__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Share__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Share__some-network__share-count"
          >
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="Share__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Share__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Share__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Share__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Share__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Share__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Share__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Share__some-network__share-button"
          >
            <GooglePlusIcon size={32} round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="Share__some-network__share-count"
          >
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Share__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Share__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={shareUrl}
            className="Share__some-network__share-count"
          >
            {count => count}
          </LinkedinShareCount>
        </div>
      </div>
    );
  }
}

export default Share;
