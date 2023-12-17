const saveAndRender = async (document, pdfIframeRef) => {
  // Serialize the `PDFDocument` to bytes (a `Uint8Array`).
  //const pdfBytes = await doc.save();
  const pdfDataUri = await document.saveAsBase64({ dataUri: true });
  pdfIframeRef.current.src = pdfDataUri;
};

const addTextToDocument = async (document, inputName, inputText) => {
  const page = document.getPages()[0];
  const form = document.getForm();
  const inputField = form.createTextField(inputName);
  inputField.setText(inputText);
  inputField.addToPage(page, { x: 55, y: 640 });

  await saveAndRender(document);
};

const addImageToDocument = async (document) => {
  const page = document.addPage();
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

  await saveAndRender(document);
};

export { addTextToDocument, addImageToDocument };
