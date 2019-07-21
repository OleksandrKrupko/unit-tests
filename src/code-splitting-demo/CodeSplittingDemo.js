import React from 'react';

import {ViewToggle} from './ViewToggle';

const Component1 = React.lazy(() => import('./Component1'));
const Component2 = React.lazy(() => import('./Component2').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    }, 2000)
  })
}));

export class CodeSplittingDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ViewToggle>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component1/>
            <Component2/>
          </React.Suspense>
        </ViewToggle>
        <ViewToggle>
          <React.Suspense fallback={<div>Loading...</div>}>
              <Component2/>
          </React.Suspense>
        </ViewToggle>
      </React.Fragment>
    )
  }
}