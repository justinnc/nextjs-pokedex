import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const LoadingProgress = ({ size = 13, ...rest }) => {
  return (
    <div className='text-center mt-20'>
      <PulseLoader size={size} {...rest} />
    </div>
  );
};

export default LoadingProgress;
