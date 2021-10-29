import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './burger-button.module.css';

interface IBurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const cx = classNames.bind(styles);

export const BurgerButton = (props: IBurgerButtonProps): JSX.Element => {
  const { isOpen, onClick } = props;

  return (
    <button
      className={cx('button', { open: isOpen })}
      type='button'
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      onClick={onClick}
    />
  );
};
