import React from "react";

const SocialIcon = (
  channel,
  url,
  icon,
  color,
  size,
  className,
) => {
  return (
    <li>
      <a
        href="{url}"
        target="_blank"
        rel="noopener noreferrer"
        className="{className}"
      >
        <i className="{icon}" style={{ color: "{color}", fontSize: "{size}" }} />
      </a>
    </li>
  );
}

export default SocialIcon;