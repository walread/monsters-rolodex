import CardContainer from './card-container';
import './card-list.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
