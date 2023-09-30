import React from "react";

const Nextpagemovies = ({pagesmovies,Nextpagebutton,preiviewpagebutton}) => {
 /*  console.log(pagesmovies.total_pages) */
  return (
    <>
      <div className="next-page">
        <div className="next-pre-page">
            <div className="pre-page-button" onClick={preiviewpagebutton}><h1 className="pre-text-page">Preview</h1></div>
            <div className="page-number-show"><h1 className="page-num">{pagesmovies.page}/{pagesmovies.total_pages}</h1></div>
            <div className="next-page-button" onClick={Nextpagebutton}><h1 className="next-text-page">Next</h1></div>
        </div>
      </div>
    </>
  );
};

export default Nextpagemovies;
