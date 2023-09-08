import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader
        size={80}
        color={'#342da0'}
        loading={true}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
