import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

export default function PagesPDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;
  // eslint-disable-next-line no-restricted-globals

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      className='PDF-page'
      renderMode='canvas'
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1}  scale='.9'/>
      ))}
    </Document>
  );
}