import React from "react";
import { useRef } from "react";
import Input from "../components/Input";
import { inputs } from "../utils/links";

const Contact = () => {
  const messageRef = useRef();

  const onsubmit = (event) => {
    event.preventDefault();
    alert(`
    First Name: ${messageRef.current[0].value}
    Last Name: ${messageRef.current[1].value}
    Email: ${messageRef.current[2].value}
    Message: ${messageRef.current[3].value}
    `);
  };

  return (
    <main className="grid place-items-center px-2 my-16 max-w-4xl mx-auto">
      <div className="w-full">
        <div className="contact-heading">
          <h1 className="text-[#101828] font-semibold text-4xl tracking-tight">
            Contact Me
          </h1>
          <p className="text-[#475467] text-lg md:text-xl font-normal">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form
          onSubmit={onsubmit}
          ref={messageRef}
          className="contact-form mt-8"
        >
          {inputs.map((item) => (
            <Input item={item} key={item.id} />
          ))}
          <div className="input-four flex flex-col gap-y-2">
            <label
              htmlFor="message"
              className="font-medium text-sm text-[#344054]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
              className="h-[132px] min-h-[132px] max-h-[132px] border border-[#D0D5DD] rounded-lg py-2 px-3 outline-none focus:outline-[#84CAFF] focus:border-none"
            ></textarea>
          </div>
          <div className="input-five space-x-3">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              required
              className="accent-[#84caff]"
            />
            <span className="text-[#475467] font-normal text-base">
              You agree to providing your data to {"{name}"} who may contact
              you.
            </span>
          </div>
          <button id="btn__submit" className="btn__submit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
