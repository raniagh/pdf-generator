import { BsChevronLeft } from "react-icons/bs";
import { useState } from "react";

import { PdfContent, Arrows, Block } from "./components";
import "./Home.css";
import arselaLogo from "../../assets/images/arsela-technologies-white.png";
import { usePdf } from "../../context/PdfContext";

const Home = () => {
  const { setDocument } = usePdf();
  const [isOpen, setIsOpen] = useState(false);

  const editClass = `edit-button ${!isOpen ? "btn" : ""} `;

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const bytes = new Uint8Array(e.target.result);
        setDocument(bytes);
      };
      // Read the file as ArrayBuffer
      reader.readAsArrayBuffer(file);
      setIsOpen(true);
    }
  };

  return (
    <div className='main-container'>
      <div className='body-content first-part'>
        <img src={arselaLogo} alt='logo' className='logo' />
        <div className='first-titles'>
          <div className='main-title'>All your services, No-code.</div>
          <div className='sub-title'>
            Build your business apps and automate your tasks without coding.
          </div>

          <div className={editClass} id='element2'>
            <label htmlFor='fileInput' className={`${!isOpen && "btn"}`}>
              Edit a PDF
            </label>
            <input
              type='file'
              id='fileInput'
              accept='.pdf'
              onChange={handleFileChange}
            />
          </div>

          {isOpen && (
            <>
              <Block type='Text' />
              <Block type='Image' />
              <button onClick={() => setIsOpen(false)} className='back-button'>
                <BsChevronLeft />
                Back
              </button>
            </>
          )}
        </div>
      </div>
      <Arrows isOpen={isOpen} />
      <PdfContent isOpen={isOpen} />
    </div>
  );
};

export default Home;
