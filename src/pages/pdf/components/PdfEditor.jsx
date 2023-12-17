import { useEffect, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

import { BsTextareaT } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import "./PdfEditor.css";
import Button from "../../../components/UI/Button";
import {
  addImageToDocument,
  addTextToDocument,
} from "../../../services/Utilities";
import { usePdf } from "../../../context/PdfContext";
import { toast } from "react-toastify";

export const PdfEditor = () => {
  const { document } = usePdf();
  const [pdfDocument, setPdfDocument] = useState(null);
  const pdfIframeRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        if (document) {
          const existingPdfBytes = document;
          // Load a `PDFDocument` from the existing PDF bytes.
          const loadedPdfDoc = await PDFDocument.load(existingPdfBytes);
          setPdfDocument(loadedPdfDoc);

          const pdfDataUri = await loadedPdfDoc.saveAsBase64({ dataUri: true });
          pdfIframeRef.current.src = pdfDataUri;
        }
      } catch (error) {
        toast.error("Please retry again", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

    loadPdf();
  }, [document]);

  return (
    <>
      <div className='button-group'>
        <Button
          text='Text'
          icon={<BsTextareaT size={22} />}
          action={() => addTextToDocument(pdfDocument)}
        />
        <Button
          text='Image'
          icon={<FiImage size={22} />}
          action={() => addImageToDocument(pdfDocument)}
        />
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
