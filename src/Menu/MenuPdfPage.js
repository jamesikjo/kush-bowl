import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import kushMenu from "../assets/kush-menu.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MenuPdfPage = () => {
  return (
    <>
      <Document file={kushMenu}>
        {[1, 2, 3, 4].map((page) => (
          <Page pageNumber={page} key={page} />
        ))}
      </Document>
    </>
  );
};

export default MenuPdfPage;
