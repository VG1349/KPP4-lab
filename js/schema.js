/* @flow */

import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: 'Bill',
    align: 'left',
  },
 {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: '1995',
  },
  {
    id: 'phone',
    label: 'phone',
    type: 'text',
    sample: '333',
  },
]
