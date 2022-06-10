import { FriendList } from "./FriendList"
export  function FriendListItem({ friends }) {
  return (
   <>
      {friends.map((friend) => (
        <FriendList 
        avatar={friend.avatar}
        name={friend.name}
        status={friend.isOnline}
        key={friend.id}
        />
      ))}
    </>
  )
}
