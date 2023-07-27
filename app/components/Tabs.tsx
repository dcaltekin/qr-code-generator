"use client";

import React from "react";
import { BsPersonVcard, BsQrCodeScan } from "react-icons/bs";

export default function Tabs() {
  return (
    <div>
      <div className="border-b border-gray-600 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
          <li className="mr-2">
            <button className="flex gap-x-2 items-center justify-center p-4 text-blue-500 border-b-2 border-blue-500 rounded-t-lg active  group">
              <BsQrCodeScan size={20} />
              QR Card
            </button>
          </li>
          <li className="mr-2">
            <button className="flex items-center gap-x-2  p-4 text-gray-400 rounded-t-lg cursor-not-allowed ">
              <BsPersonVcard size={20} />
              VCard (Coming soon)
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
