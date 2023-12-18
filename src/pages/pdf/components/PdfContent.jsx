import { PdfEditor } from "./PdfEditor";
import "./PdfContent.css";

export const PdfContent = ({ isOpen }) => {
  const bodyClass = `body-content second-part ${isOpen ? "openedEditor" : ""} `;
  return (
    <div className={bodyClass}>
      <div className='second-titles'>
        <div>PDF editor</div>
        <div className='second-title'>Edit PDF files. Fill & sign PDF</div>
      </div>
      {!isOpen ? (
        <>
          <div className='second-title' id='element1'>
            To start Editing click on
            <span style={{ color: "#5068F2", marginLeft: "0.2rem" }}>
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
