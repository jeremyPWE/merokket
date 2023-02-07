import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [contactDetail, setContactDetail] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received", res);
        if (res.status === 200) {
          toast("common:toastOk");
        } else {
          toast("common:toastFail");
        }
      })
      .catch((e) => console.log(e));
    reset();
  };
  return (
    <>
      <Header />
      <Layout>
        <Section className="pt-[50px] xl:pt-[100px] flex-col md:gap-[50px]">
          <div className="flex flex-col justify-between w-full">
            <div className="flex w-full pt-[40px]">
              <Link href="/" className="mt-[10px] xl:w-1/3">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] md:mt-[4px] mr-[5px]"
                  >
                    <path
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="2xl:text-[24px]"> BACK TO HOME</p>
                </div>
              </Link>
              <div className="w-full mr-[15px] xl:-ml-[8px] pb-[10px] xl:pt-0 xl:pb-0">
                <h2>Work with us.</h2>
                <p className="md:text-[24px] font-medium pt-[15px] hidden md:flex">
                  Ready to collaborate or having any though? Send us a message!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full xl:mr-[25px]">
            <div className="hidden xl:flex w-1/3 2xl:w-1/2" />
            <div className="w-full flex flex-col">
              <div className="flex justify-between w-full">
                <p className="md:hidden pb-[15px]">
                  Ready to collaborate or having any though? Send us a message!
                </p>
              </div>
              <form
                className="flex flex-col gap-2 items-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-10 justify-evenly w-full">
                  <div className="flex flex-col justify-between w-full gap-[25px]">
                    <div className="flex flex-col ">
                      <label htmlFor="name" className="hidden">
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
                        placeholder="Name"
                        className={`border  bg-inherit outline-none p-2 ${
                          errors.name
                            ? `ring-2 ring-red-500 focus:ring-red-500`
                            : null
                        }`}
                      ></input>
                    </div>
                    <div className="flex flex-col ">
                      <label htmlFor="email" className="hidden">
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
                        placeholder="Email"
                        className={`border  bg-inherit outline-none p-2 ${
                          errors.email
                            ? `ring-2 ring-red-500 focus:ring-red-500`
                            : null
                        }`}
                      ></input>
                    </div>
                    <div className="flex flex-col ">
                      <label htmlFor="phone" className="hidden">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "You must enter your whatsapp number",
                          },
                        })}
                        placeholder="Phone Number"
                        className={`border  bg-inherit outline-none p-2 ${
                          errors.phone
                            ? `ring-2 ring-red-500 focus:ring-red-500`
                            : null
                        }`}
                      ></input>
                    </div>
                    <div className="flex flex-col ">
                      <label htmlFor="message" className="hidden">
                        Message
                      </label>
                      <textarea
                        type="text"
                        {...register("message", {
                          required: {
                            value: true,
                            message: "You must enter a message",
                          },
                        })}
                        placeholder="Write a Message"
                        className={`border  bg-inherit outline-none p-2 h-[200px] ${
                          errors.message
                            ? `ring-2 ring-red-500 focus:ring-red-500`
                            : null
                        }`}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button className="w-[160px] h-[50px] bg-[#f8f8f8] text-black my-[20px] md:mt-[40px]">
                  Send Mail
                </button>
              </form>
            </div>
          </div>

          <ToastContainer />
        </Section>
      </Layout>
    </>
  );
}
