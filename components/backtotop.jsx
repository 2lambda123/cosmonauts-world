/* eslint-disable react/button-has-type */
import React from 'react';

const scrollToTop = (top) => {
  window.scrollTo({ top, behavior: 'smooth' });
};

const BackToTop = () => (
  <>
    <button onClick={() => scrollToTop(0)}>
      <div>
        <span>Back to Top &#x2191;</span>
      </div>
    </button>

    <style jsx>
      {`
        button {
          padding: 10px 20px;
        }
      `}
    </style>
  </>
);

export default BackToTop;
