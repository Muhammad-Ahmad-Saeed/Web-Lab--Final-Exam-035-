import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleReservation } from '../../features/missions/missionsSlice';

const MissionData = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleMissionReservation = ({ target }) => {
    const { type } = target.dataset;
    dispatch(handleReservation({ id, type }));
  };

  return (
    <tr className="row">
      <td >{name}</td>
      <td >{description}</td>
      <td>
        {!reserved && (<p>Not A Member</p>)}
        {reserved && (<p>Active Member</p>)}
      </td>
      <td className="column mission-button">
        {!reserved && (
          <button type="button" data-type="join" onClick={handleMissionReservation}>Join Mission</button>
        )}
        {reserved && (
          <button type="button" data-type="leave" onClick={handleMissionReservation}>Leave Mission</button>
        )}
      </td>
    </tr>
  );
};

MissionData.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionData;