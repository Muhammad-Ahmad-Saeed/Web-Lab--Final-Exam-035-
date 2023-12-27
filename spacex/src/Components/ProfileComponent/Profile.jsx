import PropTypes from 'prop-types';
import RandomId from '../../random';

const ProfileTable = ({ header, dataList, type }) => (
  <div>
    <h2>{header}</h2>
    <table className="profile-table">
      <tbody>
        {dataList.map((data) => (
          <tr key={RandomId()}>
            <td>
              {type === 'rockets' ? data.name : data.mission_name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ProfileTable.propTypes = {
  header: PropTypes.string.isRequired,
  dataList: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProfileTable;