import { Routes, Route } from 'react-router';

import Layout from './Layout/NavLayout';
//import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/missions" element={<Missions />} />
    <Route path="/my-profile" element={<MyProfile />} />
     </Route>
  </Routes>
);

export default App;