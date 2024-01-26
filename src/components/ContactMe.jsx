import React from "react";

const ContactMe = () => {
  return (
    <div className="flex flex-row justify-center bg-brightYellow text-blueGray gap-10 p-10">
      <form className="w-1/3 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-3 bg-transparent border-b-2 border-solid border-black"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-3 bg-transparent border-b-2 border-solid border-black"
        />
        <textarea
          cols="30"
          rows="5"
          className="bg-transparent border-b-2 border-solid border-black"
        ></textarea>
        <button
          type="submit"
          className="border-black border-2 py-3 px-6 w-fit"
        >
          SUBMIT
        </button>
      </form>
      <div className="w-1/4">
      <h1 className="font-bold text-5xl">CONTACT ME</h1>
      <p>+91 782 497 3688</p>
      </div>
      
    </div>
  );
};

export default ContactMe;
