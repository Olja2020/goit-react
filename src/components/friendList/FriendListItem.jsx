import PropTypes from "prop-types";

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
