import PropTypes from "prop-types";
const Profile = ({ name, tag, location, image, stats }) => (
  <div>
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  //stats: PropTypes.number.isRequired,
};

export default Profile;
