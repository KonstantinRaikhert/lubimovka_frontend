import React from 'react';

import cn from 'classnames';

import styles from './PersonsCard.module.css';
import {Icon} from '../icon';

interface IPersonCardProps {
  participant: boolean,
  name: string,
  link: string,
  about?: string,
  response?: string,
}

const PersonCard: React.FC<IPersonCardProps> = (props) => {
  const {
    name,
    link,
    about,
    participant,
    response,
  } = props;

  const mode = participant ? 'participant' : 'volunteer';

  return (
    <div className={cn(styles[`container_${mode}`])}>
      <div className={cn(styles[`img_container_${mode}`])}>
        <img className={styles.img} src={link} alt={name}/>
        {mode === 'volunteer' && response &&
        <button className={styles.comment}>
          <Icon glyph={'comment'} />
        </button>}
      </div>
      {/*заменить h6 на Headline,
            у карточек волонтера заголовок h7 на десктопе и h6 в мобилке,
            у участников везде h6*/}
      <h6 className={styles.name}>{name}</h6>
      {/*заменить p на body-text*/}
      {mode === 'participant' && about &&
      <p className={styles.about}>{about}</p>}
    </div>
  );
};

export default PersonCard;
