import React, { useState } from "react";
import staticContent from "./static-content";
import "./Content.scss";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="latest-posts">
            Latest posts &nbsp;
            <a className="see-all-posts" href="#under-construction">
                See All Posts
            </a>
        </div>
        {staticContent.reverse().map((c, i) => {
          if (i <= 4) {
            return (
              <>
                <div className="content-header">
                  <div className="content-count">
                    {staticContent.length - i}
                  </div>
                  <div className="content-title">{c.header}</div>
                </div>
                <div className="content-body">
                  {(c.body)}
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Content;
