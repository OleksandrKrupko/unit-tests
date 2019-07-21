import React from 'react';

import {ViewToggle} from './ViewToggle';
import LoadingBoundary from './LoadingBoundary';

const Component3 = React.lazy(() => import('./Component3'));

export default () => (
  <React.Fragment>
    <div>Component 2!</div>
    <ViewToggle>
      <LoadingBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component3/>
          <Component3/>
        </React.Suspense>
      </LoadingBoundary>
    </ViewToggle>
  </React.Fragment>
);
