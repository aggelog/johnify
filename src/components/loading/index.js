import React from 'react';
import './styles.css';

const Loading = () => (
  <div>
    <span className="l-1" />
    <span className="l-2" />
    <span className="l-3" />
    <span className="l-4" />
    <span className="l-5" />
    <span className="l-6" />
  </div>
);

const BigLoading = () => (
  <div className="application-loading__global-level">
    <Loading />
  </div>
);

export { BigLoading }

export default Loading;
