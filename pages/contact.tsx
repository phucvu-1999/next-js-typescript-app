import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import ContactForm from "../Components/Contact/contact-form";

const ContactPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="You can easy contact with me"></meta>
      </Head>
      <ContactForm />;
    </React.Fragment>
  );
};

export default ContactPage;
