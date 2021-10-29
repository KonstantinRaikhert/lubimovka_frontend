import { FC, useState, useEffect } from 'react';

import { PersonCard } from '../ui/person-card';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


import style from './trustees-persons-list.module.css';

interface TrusteePersonData {
  id: number,
  name: string,
  link: string,
  about: string
}

interface TrusteesPersonsProps {
  trustees: Array<TrusteePersonData>
}

const TrusteesPersons: FC<TrusteesPersonsProps> = ({ trustees }) => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    spacing: 30,
    slidesPerView: 3,
    breakpoints: {
      '(max-width: 728px)': {
        slidesPerView: 2,
        mode: 'free-snap',
      },
      '(max-width: 650px)': {
        slidesPerView: 1.5,
        mode: 'free-snap',
      },
      '(max-width: 520px)': {
        slidesPerView: 1.7,
        mode: 'free-snap',
      },
      '(max-width: 450px)': {
        slidesPerView: 1.5,
        mode: 'free-snap',
      },
    },
  });

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, []);

  return (
    <>
      {
        Number(screenWidth) < 729 &&
        <div ref={sliderRef} className="keen-slider">
          {trustees.map((trustee) => (
            <div key={trustee.id} className="keen-slider__slide">
              <PersonCard
                participant={true}
                link={trustee.link}
                about={trustee.about}
                name={trustee.name}
              >
              </PersonCard>
            </div>
          ))}
        </div>
      }

      {
        Number(screenWidth) > 728 &&
        <ul className={style.trusteesList}>
          {trustees.map((trustee) => (
            <li key={trustee.id} className={style.trusteesListItem}>
              <PersonCard
                participant={true}
                link={trustee.link}
                about={trustee.about}
                name={trustee.name}
              >
              </PersonCard>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default TrusteesPersons;
