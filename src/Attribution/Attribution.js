import React, { useState } from "react";
import "./Attribution.scss";

const attributionContent = [
  {
    title: "Star icons created by Freepik - Flaticon",
    link: "https://www.flaticon.com/free-icons/star",
  },
  {
    title: "Photo by NASA on Unsplash",
    link: "https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  }
];

const Attribution = () => {
  return (
    <>
      <div className="attribution">
        {attributionContent.map((c, i) => {
          return (
            <div className="attribution-content">
              <a href={c.link} className="attribution-link" target="_blank" rel="noreferrer noopener">
                {c.title}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Attribution;
