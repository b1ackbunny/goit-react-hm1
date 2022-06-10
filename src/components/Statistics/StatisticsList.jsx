import { Statistics } from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'
// import { getRandomHexColor } from './color.js';

export  function StatisticsList({ title,  stats }) {

  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map((stat) => (
            <li className={s.item}  key={stat.id} >
            <Statistics 
            label={stat.label}
           percentage={stat.percentage}/>
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