import React from "react";
import QRCode from "qrcode.react";

export default function QRCodePattern() {
  return (
    <div>
      <QRCode
        id="qr-code-svg"
        value="https://dogukancaltekin.vercel.app/"
        size={200}
        renderAs="svg"
      />
    </div>
  );
}
