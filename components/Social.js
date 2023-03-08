import React from "react";
import SocialIcon from "./SocialIcon";

// Todo: Move to global scope (GraphQL store?)
const socialHandles = [
  {
    channel: "twitter",
    url: "https://twitter.com/nextjs",
    icon: "fab fa-twitter",
    color: "#1DA1F2",
    size: "1.5rem",
    className: "mr-4",
  },
]

const Social = () => {
  return (
    <ul>
      {socialHandles.map((socialHandle) => (
        <SocialIcon
          key={socialHandle.channel}
          channel={socialHandle.channel}
          url={socialHandle.url}
          icon={socialHandle.icon}
          color={socialHandle.color}
          size={socialHandle.size}
          className={socialHandle.className}
        />
      ))}
    </ul>
  );
}

export default Social;