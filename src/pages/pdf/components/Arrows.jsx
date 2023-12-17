import React from "react";
import Xarrow from "react-xarrows";

export const Arrows = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <>
          <Xarrow
            start='pdfIframe'
            end='block-a'
            color='black'
            headSize={6}
            strokeWidth={1}
            dashness={true}
            animateDrawing={true}
          />
          <Xarrow
            start='pdfIframe'
            end='block-b'
            color='black'
            headSize={6}
            strokeWidth={1}
            dashness={true}
            animateDrawing={true}
          />
        </>
      ) : (
        <Xarrow
          start='element1'
          end='element2'
          color='black'
          headSize={6}
          strokeWidth={1}
          dashness={true}
          animateDrawing={true}
        />
      )}
    </>
  );
};
