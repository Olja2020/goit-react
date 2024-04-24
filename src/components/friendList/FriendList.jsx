//import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
//import friends from "../friends.json";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
