import { useState } from "react";
import { PdfEditor } from "./PdfEditor";
import "./PdfContent.css";

export const PdfContent = ({ isOpen }) => {
  const [url, setUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // e.target.result contains the file content as ArrayBuffer
        const bytes = new Uint8Array(e.target.result);
        setUrl(bytes);

        // Now you can perform further operations with the bytes, such as sending them to a server or processing them.
      };

      // Read the file as ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className='body-content second-part'>
      <div className='second-titles'>
        <div>PDF editor</div>
        <div className='second-title'>Edit PDF files. Fill & sign PDF</div>
      </div>
      {!isOpen ? (
        <>
          <div className='second-title'>
            To start Editing click on
            <span
              style={{ color: "#5068F2", marginLeft: "0.2rem" }}
              id='element1'
            >
              Edit a PDF
            </span>
          </div>
          <input
            type='file'
            onChange={handleFileChange}
            style={{ marginTop: "8rem" }}
          />
        </>
      ) : (
        <PdfEditor url={url} />
      )}
    </div>
  );
};
