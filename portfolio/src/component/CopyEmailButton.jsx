import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { TbCopyCheckFilled } from "react-icons/tb";
import "../styles/CopyEmailButton.css";

const CopyEmailButton = () => {
  const [copied, Setcopied] = useState(false);
  const email = "liriolouise234@gmail.com";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        Setcopied(true);
        setTimeout(() => Setcopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy email:", err));
  };
  return (
    <div>
      <button className="contact-button" onClick={handleCopy}>
        {copied ? (
          <p>
            <TbCopyCheckFilled />
            Email has copied
          </p>
        ) : (
          <p>
            <FaCopy /> Copy Email Address
          </p>
        )}
      </button>
    </div>
  );
};

export default CopyEmailButton;
