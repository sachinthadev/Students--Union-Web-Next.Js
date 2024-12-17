import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Students' union sliate kurunegala",
  description: "This is Contact Page for Students' union sliate kurunegala",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We’re here to help! Whether you have questions, need support, or want to connect with us, our contact page is your gateway to get in touch. Reach out via email, phone, or WhatsApp, or drop by our location to say hello."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
