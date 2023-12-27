import { NavLink, Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <div>
        <Link to="/">
          <img src={`/logo.png`} alt="Spacex" />
        </Link>
        <h2>Space Travellers Hub</h2>
      </div>
      <ul>
        <li>
          <NavLink
            to="rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="my-profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;