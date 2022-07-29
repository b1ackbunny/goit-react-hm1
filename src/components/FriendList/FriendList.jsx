import PropTypes from 'prop-types'
import { FriendListItem } from './FriendListItem';
export function FriendList({ friends }) {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id}) => (
        
        <FriendListItem
          avatar={avatar}
          name={name}
          status={isOnline}
          key={id}
        />
      ))}
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
}