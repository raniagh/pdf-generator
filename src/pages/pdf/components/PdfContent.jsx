import { PdfEditor } from "./PdfEditor";
import "./PdfContent.css";

export const PdfContent = ({ isOpen }) => {
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
        </>
      ) : (
        <PdfEditor />
      )}
    </div>
  );
};
