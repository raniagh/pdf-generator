import { useEffect, useRef, useState } from "react";
import { BsTextareaT } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import "./PdfEditor.css";
import Button from "../../../components/UI/Button";

export const PdfEditor = ({ url }) => {
  const pdfIframeRef = useRef(null);

  return (
    <>
      <div className='button-group'>
        <Button text='Text' icon={<BsTextareaT size={22} />} />
        <Button text='Image' icon={<FiImage size={22} />} />
      </div>
      <div className='pdf-content'>
        <iframe
          ref={pdfIframeRef}
          style={{ width: "100%", height: "90%" }}
          title='pdf'
          id='pdfIframe'
        ></iframe>
        <button className='export-button'>Export</button>
      </div>
    </>
  );
};
