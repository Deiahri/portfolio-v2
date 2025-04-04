import React from "react";
export default function AnchorButton({children, href, style, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <a
    href={href||undefined}
    style={{
      padding: "0.5rem 2rem",
      border: "2px solid #fff3",
      borderRadius: "0.5rem",
      fontSize: "1.2rem",
      backgroundColor: "#0003",
      color: "#fffd",
      boxSizing: 'border-box',
      cursor: 'pointer',
      textAlign: 'center',
      textWrap: 'wrap',
      ...style
    }}
    {...props}
  >
    {children}
  </a>
}

