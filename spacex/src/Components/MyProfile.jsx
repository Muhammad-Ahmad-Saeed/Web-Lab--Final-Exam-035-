
import { useSelector } from 'react-redux';
import ProfileTable from './ProfileComponent/Profile';

const MyProfile = () => {
  const { Dragons } = useSelector((state) => state.Dragons);
  const { missionList } = useSelector((state) => state.missions);

  const reservedDragons = Dragons.filter(({ reserved }) => reserved);
  const joinedMissions = missionList.filter(({ reserved }) => reserved);

  return (
    <section className="mission-container">
      <div className="profile-holder">
        <ProfileTable dataList={reservedDragons} header="My Dragons" type="Dragons" />
        <ProfileTable dataList={joinedMissions} header="My Missions" type="missions" />
      </div>
    </section>
  );
};

export default MyProfile;