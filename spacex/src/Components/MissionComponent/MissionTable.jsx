import { useSelector } from 'react-redux';
import MissionData from './MissionData';

const MissionTable = () => {
  const { missionList } = useSelector((state) => state.missions);

  return (
    <table className="missionTable">
      <thead>
        <tr>
          <th>Description</th>
          <th>Mission</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {missionList.map((mission) => (
          <MissionData
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionTable;