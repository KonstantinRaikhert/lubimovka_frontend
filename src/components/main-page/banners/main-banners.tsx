import React, { useEffect, useRef, useState, FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './main-banners.module.css';

export const MainBanners: FC = ():JSX.Element => {
  const bannersRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  
  // const [isWaiting, setIsWaiting] = useState(false);

  // function throttle (cb: () => void, delay: number) {
  //   let isWaiting = false;
  //   function wraper() {
  //     // Ждем, ничего не возвращаем
  //     if (isWaiting) {
  //       console.log(1);
  //       return;
  //     }
  //     // Иначе вызываем cb, и ждем
  //     cb();
  //     isWaiting = true;
  //     setTimeout(() => {
  //       isWaiting = false;
  //     }, delay);
  //   }

  //   return wraper;
  // }

  // function debounce(cb: () => void, delay: number) {
  //   let timer: NodeJS.Timeout;
  //   return function(...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(cb.bind(this, ...args), delay || 0);
  //   };
  // }

  const scrollHandler = () => {
    if (bannersRef.current && itemRef.current) {
      const eventBanner = bannersRef.current.getBoundingClientRect();
      const eventLi = itemRef.current.getBoundingClientRect();
      if (eventBanner.y < 0) {
        console.log(eventLi.height);
        console.log(eventBanner.y);
        console.log(eventLi.height + eventBanner.y);
        itemRef.current.style.maxHeight = eventLi.height + eventBanner.y + 'px';
      } else {
        itemRef.current.style.maxHeight = eventLi.height - eventBanner.y + 'px';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    // return () => {
    //   window.removeEventListener('scroll', () => scrollHandler());
    // };
  }, []);

  return (
    <section className={ cn(styles.banners) } ref={bannersRef}>
      <ul className={ cn(styles.list) }>
        <li className={ cn(styles.item) } ref={itemRef}>
          <h2 className={ cn(styles.title) }>
            Премьера спектакля Ивана Вырыпаева «Солнечная линия»
          </h2>
          <div className={ cn(styles.container) }>
            <div className={ cn(styles.content) }>
              <p className={ cn(styles.desc) }>
                Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.
              </p>
              <Button 
                label='читать' 
                iconPlace='left' 
                icon='arrow-right' 
                gap='4px'
                border='bottomLeft'
              />
            </div>
            <img 
              src='https://sun9-15.userapi.com/impg/BrbXevIzjABChomHzzXuKYJ0ZTWrcuhy_lQnwA/dshSQq8AJVQ.jpg?size=720x414&quality=95&sign=2ceeb729a98f8fd68fb5b4e975b6234c&type=album'
              alt='Волонтеры'
              className={ cn(styles.img) }
            />
          </div>
        </li>
        <li className={ cn(styles.item) }>
          <h2 className={ cn(styles.title) }>
            Любимовка в театре «Современник»
          </h2>
          <div className={ cn(styles.container) }>
            <div className={ cn(styles.content) }>
              <p className={ cn(styles.desc) }>
                Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.
              </p>
              <Button 
                label='читать' 
                iconPlace='left' 
                icon='arrow-right' 
                gap='4px'
                border='bottomLeft'
              />
            </div>
            <img 
              src='https://sun9-15.userapi.com/impg/BrbXevIzjABChomHzzXuKYJ0ZTWrcuhy_lQnwA/dshSQq8AJVQ.jpg?size=720x414&quality=95&sign=2ceeb729a98f8fd68fb5b4e975b6234c&type=album'
              alt='Волонтеры'
              className={ cn(styles.img) }
            />
          </div>
        </li>
        <li className={ cn(styles.item) }>
          <h2 className={ cn(styles.title) }>
            Волонтёры Любимовки 2020 о своих впечатлениях
          </h2>
          <div className={ cn(styles.container) }>
            <div className={ cn(styles.content) }>
              <p className={ cn(styles.desc) }>
                Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.
              </p>
              <Button 
                label='читать' 
                iconPlace='left' 
                icon='arrow-right' 
                gap='4px'
                border='bottomLeft'
              />
            </div>
            <img 
              src='https://sun9-15.userapi.com/impg/BrbXevIzjABChomHzzXuKYJ0ZTWrcuhy_lQnwA/dshSQq8AJVQ.jpg?size=720x414&quality=95&sign=2ceeb729a98f8fd68fb5b4e975b6234c&type=album'
              alt='Волонтеры'
              className={ cn(styles.img) }
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

