import React from "react";

const NextpreTvshowpage = ({ pagecount,nextppage,priviewpage}) => {
  return (
    <>
      <div className="next-page">
        <div className="next-pre-page">
          <div className="pre-page-button" onClick={priviewpage}>
            <h1 className="pre-text-page">Preview</h1>
          </div>
          <div className="page-number-show">
            <h1 className="page-num">
              {pagecount.page}/{pagecount.total_pages}
            </h1>
          </div>
          <div className="next-page-button" onClick={nextppage}>
            <h1 className="next-text-page">Next</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextpreTvshowpage;
