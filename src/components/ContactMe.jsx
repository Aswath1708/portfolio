import React from "react";

const ContactMe = () => {
  return (
    <div
      className="flex justify-center bg-brightYellow text-blueGray p-10"
      id="contact"
    >
      <form className="flex flex-col gap-5 xl:w-2/4 2xl:w-1/4 w-3/4">
        <h1 className="text-xl  font-bold">CONTACT ME</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-3 bg-transparent border-b-2 border-solid border-black placeholder:text-blueGray focus:outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-3 bg-transparent border-b-2 border-solid border-black placeholder:text-blueGray focus:outline-none"
        />
        <textarea
          cols="30"
          rows="5"
          className="bg-transparent border-b-2 border-solid border-black focus:outline-none"
        ></textarea>
        <button type="submit" className="border-black border-2 py-3 px-6 w-fit">
          SUBMIT
        </button>
      </form>
      {/* <div className="w-1/4">
      <h1 className="font-bold text-4xl">CONTACT ME</h1>
      <p>+91 782 497 3688</p>
      </div> */}
    </div>
  );
};

export default ContactMe;
