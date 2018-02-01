import React from 'react';

import { BigLoading } from '../components/loading';

function ApplicationLoading(WrappedComponent) {
  const Wrapped = (props) => (
    <div>
      {props.globalLoading && <BigLoading />}
      <div style={{ display: props.globalLoading ? 'none' : 'block' }}>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
  return Wrapped;
}

export default ApplicationLoading;
