import React, { FC, useCallback, Dispatch, useContext, useMemo } from 'react';

import { Action } from 'components/library-filter/library-filter-reducer';
import CurrentFiltersContext from 'pages/library/library-filters-context';
import { IProgram } from 'pages/library';
import { Tag } from 'components/ui/tag';

import styles from './library-tags-mobile.module.css';

export interface LibraryTagsMobileProps {
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
}

const LibraryTagsMobile: FC <LibraryTagsMobileProps> = ({ programmes, filterDispatcher }) => {
  const filterState = useContext(CurrentFiltersContext);

  const selectedProgrammes = useMemo(()=> {
    return programmes.filter((tag) => {
      for (let i = 0; i < filterState.program.length; i++) {
        if (tag.pk === Number(filterState.program[i])) {
          return tag;
        }
      }
    });
  }, [filterState.program, programmes]);

  const handleTagClick = useCallback(
    (el: string): void => {
      if (!filterState.program.find((i) => i === el)) {
        filterDispatcher({ type: 'add programme', program: el });
      } else {
        filterDispatcher({ type: 'remove programme', program: el });
      }
    }, [filterState, filterDispatcher]);

  const handleYearsClick = useCallback((year: string): void => {
    filterDispatcher({ type: 'remove year', festival: year });
  }, [filterDispatcher]);

  return (
    <ul className={styles.programmesList}>
      {filterState.festival.map((year, idx) => (
        <li onClick={() => handleYearsClick(String(year))} className={styles.programme} key={idx}>
          <Tag label={String(year)} selected={true} isIcon={true}/></li>
      ))}
      {selectedProgrammes.map(({ pk, name }) => (
        <li onClick={() => handleTagClick(String(pk))} className={styles.programme} key={pk}>
          <Tag label={name} selected={true} isIcon={true}/></li>
      ))}
    </ul>
  );
};

export default LibraryTagsMobile;
