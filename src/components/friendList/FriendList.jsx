//import PropTypes from "prop-types";
//import FriendListItem from "./FriendListItem";
//import friends from "../friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <li key={friend.id}>{friend}</li>;
      })}
    </ul>
  );
};

export default FriendList;
