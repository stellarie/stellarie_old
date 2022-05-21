// importing react so we can allow JSX inside the imported object
// we can override default styling using JSX
import React from "react";
import "./Content.scss";

const staticContent = [
  {
    header: "Hello, world (times infinity)",
    body: 
        "Hello, world - this may be a bit cliche for devs everywhere, but it still is a good phrase for indicating the start of a new coding endeavour. So, this space would be where I would place my thoughts about web development, and perhaps also a good sandbox for testing front-end development (I am mainly a backend developer). Also, this would be a good writing practice for me, and a way to express my thoughts in a semi-anonymous way. There's also a huge chance that I would put my personal projects in here, some code snippets, and some libraries that I had been working on. Perhaps, this would be the start of something new - I hope.",
  },
];

export default staticContent;
