import React, { useState, useEffect } from "react";

import Notification from "../UI/notification";
import styles from "./contact-form.module.css";
import { FormData } from "../../Interfaces";
import { sendContactData } from "../../helpers";
import { NotificationProps } from "../../Interfaces";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [requestStatus, setRequestStatus] = useState(""); // pending, success, error
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "error" || requestStatus === "success") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData(formData);
      setRequestStatus("success");
    } catch (err: any) {
      setRequestError(err.message);
      setRequestStatus("error");
      return;
    }

    setFormData({
      email: "",
      name: "",
      message: "",
    });
  };

  let notification!: NotificationProps;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message ...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message is sended successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can i help you?</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              onChange={onChangeHandler}
              name="email"
              type="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              onChange={onChangeHandler}
              name="name"
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              required
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={onChangeHandler}
            placeholder="Enter your message"
            required
            value={formData.message}
            name="message"
            id="message"
            rows={5}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
