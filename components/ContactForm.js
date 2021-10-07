/* placeholder focus:ring color is set to "ringfocus" make sure to add value in tailwind config file 
required axios, nodemailer, react-hook-form (yarn add)
required contact.js api and .env.local*/

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function ContactForm({ isContact, toggleC }) {
  const [sent, setSent] = useState(false);
  const toggle = () => {
    setSent(!sent);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    setSent(true);
    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div
      className={
        isContact
          ? "fixed z-30 top-0 flex w-full min-h-screen justify-center items-center md:px-4 md:py-10 opacity-100 transition-opacity duration-500 ease-out"
          : "hidden opacity-0"
      }
      id="contact"
    >
      <div
        className="absolute bg-black bg-opacity-25 h-full w-full z-0"
        onClick={() => {
          toggleC();
        }}
      ></div>
      {!sent ? (
        <div className="flex flex-col justify-center px-8 py-10 w-full h-screen sm:h-auto max-w-2xl sm:rounded-xl shadow bg-gray-50 z-30 relative">
          <div
            className="px-2 cursor-pointer absolute top-5 right-5"
            onClick={toggleC}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-6">
            <h2 className="mb-2">Contact us</h2>
            <p>have questions or anything to ask? send us a message.</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "You must enter your name",
                  },
                })}
                className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 rounded-md focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                  errors.name ? `ring-2 ring-red-500 focus:ring-red-500` : null
                }`}
                placeholder="Full Name"
              ></input>
              <span className="text-red-400 text-sm py-2">
                {errors?.name?.message}
              </span>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must enter your email",
                  },
                  minLength: {
                    value: 8,
                    message: "This is too short to be an email",
                  },
                  maxLength: {
                    value: 120,
                    message: "This is too long to be an email",
                  },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    message: "This is not a valid email",
                  },
                })}
                className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 rounded-md focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                  errors.email ? `ring-2 ring-red-500 focus:ring-red-500` : null
                }`}
                placeholder="Email"
              ></input>
              <span className="text-red-400 text-sm py-2">
                {errors?.email?.message}
              </span>
            </div>
            <div>
              <label htmlFor="full number" className="sr-only">
                Phone Number
              </label>
              <input
                type="text"
                {...register("phone")}
                className="block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 
            rounded-md focus:ring-ringfocus focus:ring-2 focus:outline-none"
                placeholder="Phone Number"
              ></input>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message", {
                  required: {
                    value: true,
                    message: "You must write a message",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Your message cannot exceed 1000 characters",
                  },
                })}
                className={`block w-full shadow py-3 px-4 border-gray-300 placeholder-gray-500 rounded-md focus:ring-ringfocus focus:ring-2 focus:outline-none ${
                  errors.message
                    ? `ring-2 ring-red-500 focus:ring-red-500`
                    : null
                }`}
                placeholder="Message"
              ></textarea>
              <span className="text-red-400 text-sm py-2">
                {errors?.message?.message}
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-ringfocus hover:bg-textPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-textPrimary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-8 w-full max-w-2xl h-screen sm:h-auto sm:rounded-xl shadow  text-ringfocus bg-gray-50 z-30">
          <div className="p-5 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-center">Message sent successfully!</h2>
          </div>
          <div className="p-10">
            <button
              type="button"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-ringfocus hover:bg-textPrimary"
              onClick={() => {
                toggle();
                toggleC();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
