import React from 'react';

import './parent.scss';

/* eslint-disable-next-line */
export interface ParentProps {}

export const Parent = (props: any) => {
  return (
    <div className="container right-nav">
      <div className="sidebar">
        Sidebar
      </div>
      <div className="main">
        Main Content
      </div>
    </div>
  );
};

export default Parent;
