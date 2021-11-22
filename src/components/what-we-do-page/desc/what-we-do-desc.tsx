import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-desc.module.css';

interface IItem {
  id: number
  mainTitle?: string
  title: string
  desc: string
  image?: {
    url: string
    alt: string
  }
}

interface IWeDoAboutProps {
  data: {
    blockOne: IItem
    blockTwo: IItem
    blockThree: IItem
  }
}

export const WhatWeDoDesc: FC<IWeDoAboutProps> = ({ data }): JSX.Element => {
  return (
    <section className={cn(styles.descItem)}>
      <div className={cn(styles.content, styles.contentReception)}>
        <div className={cn(styles.container)}>
          <h2 className={cn(styles.mainTitle)}>
            {data.blockOne.mainTitle}
          </h2>
          <h3 className={cn(styles.title, styles.titleWidth)}>
            {data.blockOne.title}
          </h3>
          <p className={cn(styles.desc)}>
            {data.blockOne.desc}
          </p>
        </div>
        <img 
          src={data.blockOne.image && data.blockOne.image.url}
          className={cn(styles.imgReception)}
          alt={data.blockOne.image && data.blockOne.image.alt}
        />
      </div>

      <div className={cn(styles.content, styles.contentSelected)}>
        <img 
          src={data.blockTwo.image && data.blockTwo.image.url}
          className={cn(styles.imgSelected)}
          alt={data.blockTwo.image && data.blockTwo.image.alt}
        />
        <div className={cn(styles.container, styles.containerSelected)}>
          <h3 className={cn(styles.title)}>
            {data.blockTwo.title}
          </h3>
          <p className={cn(styles.desc)}>
            {data.blockTwo.desc}
          </p>
        </div>
      </div>

      <div className={cn(styles.container, styles.containerInvite)}>
        <h3 className={cn(styles.title)}>
          {data.blockThree.title}
        </h3>
        <p className={cn(styles.desc)}>
          {data.blockThree.desc}
        </p>
      </div>
    </section>
  );
};
