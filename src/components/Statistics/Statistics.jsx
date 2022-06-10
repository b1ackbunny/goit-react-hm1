import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export  function Statistics({ label, percentage }){
 return(
   <>
  <span className={s.label}>{label}</span>
  <span className={s.percentage}>{percentage}%</span>
  </>
 )
}

Statistics.propTypes = {
  lable: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}