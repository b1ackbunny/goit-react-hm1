import { Statistics } from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'
// import { getRandomHexColor } from './color.js';

export  function StatisticsList({ title,  stats }) {
  
const isOnline = true;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{isOnline ? title : ''}</h2>
      <ul className={s.statList}>
        {stats.map(({id, label, percentage}) => (
            <li className={s.item}  key={id} >
            <Statistics 
            label={label}
           percentage={percentage}/>
           </li>
        ))}
      
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}