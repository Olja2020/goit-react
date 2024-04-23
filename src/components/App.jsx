// import userData from "../userData.json";
import Profile from "./profile/Profile";
// import friends from "../friends.json";
import FriendList from "./friendList/FriendList";

// export default App() {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
//       <FriendList friends={friends} />
//     </>
//   );
// };
import userData from "../userData.json";
import friends from "../friends.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}
