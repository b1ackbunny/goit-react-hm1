import s from './FriendList.module.css';
import PropTypes from 'prop-types'

export function FriendListItem({ avatar, name, status }) {
  return (
    <ul className={s.friendList}>
      <li className={s.item}>
        <span className={status ? s.online : s.ofline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </ul>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}