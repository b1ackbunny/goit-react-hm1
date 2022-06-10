import s from './FriendList.module.css'
export  function FriendList({ avatar, name, status }) {
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


