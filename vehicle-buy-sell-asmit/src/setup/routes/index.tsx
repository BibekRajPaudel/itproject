import { Home, SingleVehicle, Vehicle } from '@/pages';

const routesData = [
  {
    id: 0,
    path: '/',
    element: <Home />,
  },
  {
    id: 1,
    path: '/vehicle/:id',
    element: <SingleVehicle />,
  },
  {
    id: 1,
    path: '/vehicle',
    element: <Vehicle />,
  },
];

export default routesData;
