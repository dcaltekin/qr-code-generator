"use client";

import React, { useState, ChangeEvent } from "react";
import QRCode from "qrcode.react";
import DownloadButton from "./DownloadButton";
import Tabs from "./Tabs";

export default function QRCodePattern() {
  const [url, setUrl] = useState<string>("https://dogukancaltekin.vercel.app/");
  const [size, setSize] = useState<number>(200);
  const [error, setError] = useState<string>("");

  if (url === "") {
    setUrl("https://dogukancaltekin.vercel.app/");
  }

  const handleSize = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10);
    if (newSize < 200) {
      setError("Size must be 200 pixels or more");
    } else {
      setError("");
    }
    setSize(newSize);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <div className="bg-white flex flex-col items-center justify-center gap-y-8 px-4 md:px-48 py-12 rounded-2xl shadow-2xl ">
        <Tabs />
        <div className="w-full">
          <div className="relative  w-full ">
            <input
              className="text-blue-500 peer h-full w-full border-b-2 border-blue-500 bg-transparent pt-4 pb-1.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-500 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-500"
              placeholder=" "
              required
              onChange={(e) => setUrl(e.target.value)}
            />
            <label className="text-blue-500 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
              URL
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="relative  w-full ">
            <input
              className={
                error === ""
                  ? "text-blue-500 peer h-full w-full border-b-2 border-blue-500 bg-transparent pt-4 pb-1.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-500 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-500"
                  : "text-red-500 peer h-full w-full border-b-2 border-red-500 bg-transparent pt-4 pb-1.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-red-500 focus:border-red-500 focus:outline-0 disabled:border-0 disabled:bg-red-500"
              }
              placeholder=" "
              required
              type="number"
              min={200}
              onChange={handleSize}
            />
            <label
              className={
                error === ""
                  ? "text-blue-500 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500"
                  : "text-red-500 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-red-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-red-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:after:scale-x-100 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-500"
              }
            >
              Size (Min. 200)
            </label>
          </div>
        </div>
        <QRCode
          className="w-[200px] h-[200px]"
          id="qr-code-svg"
          value={url}
          size={size}
          renderAs="svg"
        />
        <DownloadButton id="qr-code-svg" size={size} />
      </div>
    </div>
  );
}
