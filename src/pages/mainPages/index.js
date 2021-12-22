import React from 'react';

export const samplePagesConfigs = [
  {
    path: '/panel/users',
    component: React.lazy(() => import('./Users/index')),
  },
  {
    path: '/panel/vehicles',
    component: React.lazy(() => import('./Vehicles')),
  },{
    path: '/panel/companies',
    component: React.lazy(() => import('./Companies')),
  },
];
