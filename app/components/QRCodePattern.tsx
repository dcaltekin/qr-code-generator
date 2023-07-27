"use client";

import React from "react";
import QRCode from "qrcode.react";
import DownloadButton from "./DownloadButton";

export default function QRCodePattern() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-y-4">
      <QRCode
        id="qr-code-svg"
        value="https://dogukancaltekin.vercel.app/"
        size={200}
        renderAs="svg"
      />
      <DownloadButton id="qr-code-svg" />
    </div>
  );
}
