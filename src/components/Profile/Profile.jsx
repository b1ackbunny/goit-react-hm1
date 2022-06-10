
import PropTypes from 'prop-types'
import s from './Profile.module.css'

export  function Profile({ imgUrl, name, tag, location, followers, views, likes }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={imgUrl}
          alt={name}
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.items}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number

}