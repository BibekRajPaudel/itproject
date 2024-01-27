import { Route, Routes } from 'react-router-dom';
import routesData from './setup/routes';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routesData.map((item) => (
          <Route key={item?.id} path={item?.path} element={item?.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
