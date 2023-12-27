import { Routes, Route } from 'react-router';

import Layout from './Layout/NavLayout';
//import Rockets from './Rockets';
//import Missions from './Missions';
//import MyProfile from './Myprofile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
     </Route>
  </Routes>
);

export default App;