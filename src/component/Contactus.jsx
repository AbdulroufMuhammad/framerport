
"use client";

import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex mt-10 items-center justify-center">
        <button className="border  hover:bg-slate-800 text-center mb-10 text-white p-2.5  rounded-md"  onClick={() => setIsOpen(true)}>contact us</button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
        <Drawer.Items>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <TextInput id="email" name="email" placeholder="name@company.com" type="email" />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
            </div>
            <div className="mb-6">
              <button type="submit" className="border  hover:bg-slate-600  bg-slate-800 text-center mb-10 text-white p-2.5  rounded-md w-full">
                Send message
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="abdulraufmuhammad28@gmail.com" className="hover:underline">
                abdulraufmuhammad28@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:+234 8143754658" className="hover:underline">
                +234 8143754658
              </a>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
