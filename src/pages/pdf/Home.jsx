import { BsChevronLeft } from "react-icons/bs";
import { useState } from "react";
import { PdfContent, Arrows, Block } from "./components";
import "./Home.css";
import arselaLogo from "../../assets/images/arsela-technologies-white.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='main-container'>
      <div className='body-content first-part'>
        <img src={arselaLogo} alt='logo' className='logo' />
        <div className='first-titles'>
          <div className='main-title'>All your services, No-code.</div>
          <div className='sub-title'>
            Build your business apps and automate your tasks without coding.
          </div>
          <button
            onClick={() => setIsOpen(true)}
            disabled={isOpen}
            className='edit-button'
            id='element2'
          >
            Edit a PDF
          </button>
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
