import React, { useRef, useState } from "react";
import EmailJSResponseStatus from "@emailjs/browser";
import { successToast } from "../utils/getToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJSResponseStatus.sendForm(
      "service_yq9zd9l",
      "template_n23y4hp",
      form.current,
      {
        publicKey: "KAj9T0Rsh10P4u8X-",
      }
    ).then(
      () => {
        successToast();
        setFormData({ from_name: "", from_email: "", message: "" });
      },
      (error) => {
        alert("FAILED...", error.text);
      }
    );
  };

  return (
    <div
      className="flex md:justify-start justify-center md:bg-contact-bg bg-contain bg-no-repeat bg-[center_right_3rem] text-gray-800 p-10"
      id="contact"
    >
      <form
        className="flex flex-col gap-5 xl:w-2/4 2xl:w-1/4 w-4/5"
        onSubmit={sendEmail}
        ref={form}
      >
        <h1 className="text-xl font-black  text-gray-400">Drop a Message.</h1>
        <input
          type="text"
          placeholder="Enter your Name*"
          className="p-3 bg-transparent border-b-2 border-solid border-gray-800 placeholder:text-gray-500 focus:outline-none"
          name="from_name"
          onChange={(e) =>
            setFormData({ ...formData, from_name: e.target.value })
          }
          value={formData.from_name}
          required
        />
        <input
          type="email"
          placeholder="Enter your email address*"
          className="p-3 bg-transparent border-b-2 border-solid border-gray-800 placeholder:text-gray-500 focus:outline-none"
          name="from_email"
          onChange={(e) =>
            setFormData({ ...formData, from_email: e.target.value })
          }
          value={formData.from_email}
          required
        />
        <textarea
          cols="30"
          rows="5"
          className="px-3 bg-transparent border-b-2 border-solid border-gray-800 focus:outline-none placeholder:text-gray-500"
          placeholder="Enter your message*"
          name="message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-6 w-fit font-medium text-white hover:text-yellow-300 bg-gray-800 rounded"
        >
          SEND
          <ToastContainer />
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
