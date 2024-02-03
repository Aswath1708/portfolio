import React from "react";

const ContactMe = () => {
  return (
    <div
      className="flex md:justify-start justify-center md:bg-contact-bg bg-contain bg-no-repeat bg-[center_right_3rem] text-gray-800 p-10"
      id="contact"
    >
      <form
        className="flex flex-col gap-5 xl:w-2/4 2xl:w-1/4 w-4/5"
        action="mailto:aswathbabu2000@gmail.com"
        method="post"
        encType="text/plain"
      >
        <h1 className="text-xl font-black italic text-gray-400">Drop a Message.</h1>
        <input
          type="text"
          placeholder="Enter your Name*"
          className="p-3 bg-transparent border-b-2 border-solid border-gray-800 placeholder:text-gray-500 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Enter your email address*"
          className="p-3 bg-transparent border-b-2 border-solid border-gray-800 placeholder:text-gray-500 focus:outline-none"
          required
        />
        <textarea
          cols="30"
          rows="5"
          className="px-3 bg-transparent border-b-2 border-solid border-gray-800 focus:outline-none placeholder:text-gray-500"
          placeholder="Enter your message*"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-6 w-fit font-medium text-white hover:text-yellow-300 bg-gray-800 rounded"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
