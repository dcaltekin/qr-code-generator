"use client";

import React from "react";

interface DownloadButtonProps {
  id: string;
  size: number;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ id, size }) => {
  const handleDownload = () => {
    const qrCodeSvg = document.getElementById(id);
    if (qrCodeSvg && size >= 200) {
      const svgString = new XMLSerializer().serializeToString(qrCodeSvg);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.svg";
      link.click();
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-lg"
      >
        Download SVG
      </button>
    </>
  );
};

export default DownloadButton;
