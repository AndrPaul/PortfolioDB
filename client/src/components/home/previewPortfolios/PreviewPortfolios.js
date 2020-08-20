import React from "react";

const PreviewPortfolios = ({ previewBox }) => {
  return (
    <div className='previews'>
     
        {

          previewBox.map((obj, i) => (
          <div className="previewBox" key={i}>{obj.title}</div>
          ))

        }
      
    </div>
  );
}

export default PreviewPortfolios;