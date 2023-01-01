import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'vendedor',
  },
  {
    username: 'santiago',
    role: 'vendedor',
  },
  {
    username: 'xamara',
    role: 'asesor',
  },
  {
    username: 'jonatan',
    role: 'asesor',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
