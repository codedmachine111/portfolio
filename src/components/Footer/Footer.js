import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <p>
            Built with ❤️ by{" "}
            <a href="https://github.com/codedmachine111" className="footer-logo">
              codedmachine111
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
