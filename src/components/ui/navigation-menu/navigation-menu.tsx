import { FC } from 'react';
import cn from 'classnames/bind';

import { NavigationMenuItem, INavigationMenuItemProps } from '../navigation-menu-item';

import styles from './navigation-menu.module.css';

interface INavigationMenuProps {
  items: INavigationMenuItemProps[];
  size?: INavigationMenuItemProps['size'];
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
}

const cx = cn.bind(styles);

export const NavigationMenu: FC<INavigationMenuProps> = (props) => {
  const {
    items,
    size = 'm',
    className,
    itemClassName,
    linkClassName,
  } = props;

  return (
    <ul className={cx('list', className)}>
      {items.map((item, idx) => (
        <li
          key={idx}
          className={itemClassName}
        >
          <NavigationMenuItem
            {...item}
            className={linkClassName}
            size={size}
          />
        </li>
      ))}
    </ul>
  );
};
