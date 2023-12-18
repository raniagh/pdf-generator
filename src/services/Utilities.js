import { toast } from "react-toastify";

const saveAndRender = async (document, pdfIframeRef) => {
  const pdfDataUri = await document.saveAsBase64({ dataUri: true });
  pdfIframeRef.current.src = pdfDataUri;
};

/**
 * Add a text input field to the document and render it in an iframe.
 *
 * @param {Object} document - The document to which the text input field will be added.
 * @param {React.RefObject} pdfIframeRef - Reference to the iframe element where the updated PDF will be rendered.
 *
 * @throws {Error} - Throws an error if there is an issue adding the text field or rendering the document.
 *
 * @returns {Promise<void>} - A Promise that resolves when the text field is added and the document is rendered successfully.
 */

const addTextToDocument = async (document, pdfIframeRef) => {
  try {
    const page = document.getPages()[0];
    const form = document.getForm();
    const inputField = form.createTextField("input");
    inputField.addToPage(page, { x: 55, y: 640 });
    await saveAndRender(document, pdfIframeRef);
    toast.success("Input Text Successfully Added", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    toast.error("Please retry again", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

const addImageToDocument = async (document, pdfIframeRef) => {
  const page = document.getPages()[0];
  const pngUrl = "https://pdf-lib.js.org/assets/minions_banana_alpha.png";
  const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
  const pngImage = await document.embedPng(pngImageBytes);
  const pngDims = pngImage.scale(0.5);
  page.drawImage(pngImage, {
    x: page.getWidth() / 2 - pngDims.width / 2 + 75,
    y: page.getHeight() / 2 - pngDims.height + 250,
    width: pngDims.width,
    height: pngDims.height,
  });

  await saveAndRender(document, pdfIframeRef);
};

/**
 * Export the modified PDF with updated form field and download it.
 *
 * @param {Object} document - The document to be exported.
 * @param {React.RefObject} pdfIframeRef - Reference to the iframe element where the PDF will be rendered.
 *
 * @throws {Error} - Throws an error if there is an issue exporting or downloading the PDF.
 *
 * @returns {Promise<void>} - A Promise that resolves when the PDF is exported and downloaded successfully.
 */

const exportPdf = async (document, pdfIframeRef) => {
  try {
    if (document) {
      const form = document.getForm();
      const inputField = form.getTextField("input");
      inputField.setText("test");
      await saveAndRender(document, pdfIframeRef);
      const pdfBytes = await document.save();
      download(pdfBytes, "modified_pdf.pdf", "application/pdf");
    }
    toast.success("File Successfully Exported", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    toast.error("Please retry again", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

/**
 * Download data as a file with the specified filename and MIME type.
 * @param {BlobPart} data - The data to be downloaded, typically a Blob or ArrayBuffer.
 * @param {string} filename - The desired filename for the downloaded file.
 * @param {string} type - The MIME type of the file (e.g., "application/pdf").
 * @throws {Error} - Throws an error if the data or filename is missing.
 */

const download = (data, filename, type) => {
  const blob = new Blob([data], { type: type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export { addTextToDocument, addImageToDocument, exportPdf };
