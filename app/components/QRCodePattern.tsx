"use client";

import React, { useState } from "react";
import QRCode from "qrcode.react";
import DownloadButton from "./DownloadButton";
import Tabs from "./Tabs";

export default function QRCodePattern() {
  const [url, setUrl] = useState<string>("https://dogukancaltekin.vercel.app/");
  if (url === "") {
    setUrl("https://dogukancaltekin.vercel.app/");
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <div className="bg-white flex flex-col items-center justify-center gap-y-8 px-48 py-12 rounded-2xl shadow-2xl">
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
              className="text-blue-500 peer h-full w-full border-b-2 border-blue-500 bg-transparent pt-4 pb-1.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-500 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-500"
              placeholder=" "
              required
            />
            <label className="text-blue-500 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
              Size
            </label>
          </div>
        </div>
        <QRCode id="qr-code-svg" value={url} size={200} renderAs="svg" />
        <DownloadButton id="qr-code-svg" />
      </div>
    </div>
  );
}
