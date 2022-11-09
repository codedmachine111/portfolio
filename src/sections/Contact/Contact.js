import "./Contact.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="contact-content">
          <div className="contact-content-text">
          <Subheading text="Contact" />
          <h2>
          Get in touch with <span id="diff">me</span>
        </h2>
        <p>
          Please contact me on the platforms mentioned below or write to me for
          any internship/job opportunities.
        </p>
        <div className="contact-links">
          <li className="contact-link">
          <a href="https://github.com/codedmachine111">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="contact-link">
            <a href="https://twitter.com/whoisakashh">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="contact-link">
          <a href="https://www.linkedin.com/in/akash-nayak-48210624b/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="contact-link">
          <a href="mailto:charlesbabbage1709@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </div>
          </div>
          <div className="contact-form-container">
            <h1>Write to <span id="diff">me</span></h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
