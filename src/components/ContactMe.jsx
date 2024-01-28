import React from "react";

const ContactMe = () => {
  return (
    <div
      className="flex justify-center bg-brightYellow text-blueGray p-10"
      id="contact"
    >
      <form
        className="flex flex-col gap-5 xl:w-2/4 2xl:w-1/4 w-4/5"
        action="mailto:aswathbabu2000@gmail.com"
        method="post"
        encType="text/plain"
      >
        <h1 className="text-xl  font-bold">CONTACT ME</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-3 bg-transparent border-b-2 border-solid border-black placeholder:text-blueGray focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-3 bg-transparent border-b-2 border-solid border-black placeholder:text-blueGray focus:outline-none"
          required
        />
        <textarea
          cols="30"
          rows="5"
          className="bg-transparent border-b-2 border-solid border-black focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="border-black border-2 py-3 px-6 w-fit font-medium"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
