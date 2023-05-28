import React, {useState} from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton,
} from 'react-share';

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon,
  } from "react-share";

const ShareButtons = ({ url, title, description }) => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
      setVisible(!visible);
    };

    const addBookmark = () => {
        if (navigator.userAgent.indexOf("Chrome") !== -1) {
            alert("To bookmark this page, please press Ctrl+D or Cmd+D on your keyboard.");
          } else if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(title, url, "");
          } else if (window.external && window.external.AddFavorite) {
            window.external.AddFavorite(url, title);
          } else {
            alert("Oops! Your browser doesn't support adding bookmarks automatically. Please bookmark this page manually.");
          }
      }

return (
    <div className='share'>
        <button className="share__soc_nav-button" onClick={toggleVisibility}>
            {visible ?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.41428L1.70709 15.7072L0.292877 14.293L6.58579 8.00006L0.292907 1.70718L1.70712 0.292969L8 6.58585L14.2929 0.292969L15.7071 1.70718L9.41421 8.00006L15.7071 14.293L14.2929 15.7072L8 9.41428Z" fill="#666666"/>
            </svg>
            :
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z" fill="#666666"/>
            </svg>
            }
        </button>
        {visible &&
        <div className="share__soc">
            <EmailShareButton url={url} subject={title + " | Udonis"} body={description}>
                <EmailIcon />
            </EmailShareButton>

            <FacebookShareButton url={url} quote={description}>
                <FacebookIcon />
            </FacebookShareButton>

            <LinkedinShareButton url={url} title={title} summary={description}>
                <LinkedinIcon />
            </LinkedinShareButton>

            <TwitterShareButton url={url} title={description}>
                <TwitterIcon />
            </TwitterShareButton>

            <PocketShareButton url={url} title={description}>
                <PocketIcon />
            </PocketShareButton>

            <InstapaperShareButton url={url} title={title} description={description}>
                <InstapaperIcon />
            </InstapaperShareButton>

            <LineShareButton url={url} title={title}>
                <LineIcon />
            </LineShareButton>

            <RedditShareButton url={url} title={title}>
                <RedditIcon />
            </RedditShareButton>

            <TelegramShareButton url={url} title={title}>
                <TelegramIcon />
            </TelegramShareButton>

            <ViberShareButton url={url} title={title}>
                <ViberIcon />
            </ViberShareButton>

            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon />
            </WhatsappShareButton>
        </div>
        }
        
        <button className="share__soc_nav-button" onClick={addBookmark}>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L7 12.82L2 15V2H12M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18L7 15L14 18V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="#666666"/>
            </svg>
        </button>
    </div>
)
};

export default ShareButtons;