import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-text">
        <span className="not-found-text__status">404</span>
        <h2 className="not-found-text__title">Page not found</h2>
      </div>
      <img
        className="not-found__gif"
        src="/psyduck.gif"
        alt="psyduck confused"
        width={300}
        height={300}
      />
    </div>
  );
};

export default NotFoundPage;
