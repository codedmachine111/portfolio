import "./ContactForm.scss";
import { Button } from "../../components/Button/Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  SpinnerOverlay,
  SpinnerContainer,
} from "../../components/Spinner/spinner.styles";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_5dhlk3o",
        "template_qw4rm1e",
        "#contact-form",
        "RdZTZouhGOIcmfL5i"
      )
      .then(
        function (response) {
          alert("Message sent successfully!");
          resetForm();
          console.log(response);
        },
        function (error) {
          alert("FAILED...", error);
        }
      );
  };
  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail();
    setLoading(false);
  };
  return (
    <>
      <form
        className="contact-form"
        id="contact-form"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          name="displayName"
          placeholder="Your Name"
          required
          autoComplete="off"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          id="phone"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          autoComplete="off"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          autoComplete="off"
        />
        <input
          type="textarea"
          name="message"
          placeholder="Type your message here"
          id="message"
          autoComplete="off"
        />
        {loading ? (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        ) : (
          <Button type="submit" title="SUBMIT" />
        )}
      </form>
    </>
  );
};
