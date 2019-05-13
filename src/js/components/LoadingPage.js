import React from 'react';
import loader from '../../public/images/loader.gif';

const LoadingPage = () => (
  <div className="loader">
    <img
      className="loader__image"
      src={loader}
      alt="Loader"
    />
  </div>
);

export default LoadingPage;
