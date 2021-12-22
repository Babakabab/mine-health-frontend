import {BiAlignLeft} from 'react-icons/bi';

const routesConfig = [
  {
    id: 'users',
    title: 'Users',
    messageId: 'sidebar.users',
    type: 'item',
    icon: <BiAlignLeft />,
    url: '/panel/users',
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    messageId: 'sidebar.vehicles',
    type: 'item',
    icon: <BiAlignLeft />,
    url: '/panel/vehicles',
  },
  {
    id: 'companies',
    title: 'Firmalar',
    messageId: 'sidebar.companies',
    type: 'item',
    icon: <BiAlignLeft />,
    url: '/panel/companies',
  },

];
export default routesConfig;
