import { FunctionComponent, ReactNode, CSSProperties } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useToggleClick } from '_hooks';
import './readMore.scss';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ReadMore: FunctionComponent<Props> = ({
  title,
  children,
  className = 'readMore',
  style,
}) => {
  const { open, handleToggle } = useToggleClick();

  const arrow = !open ? (
    <MdKeyboardArrowDown className={`${className}__icon`} />
  ) : (
    <MdKeyboardArrowUp className={`${className}__icon`} />
  );

  return (
    <div className={className} style={style}>
      <div className={`${className}__title`} onClick={handleToggle}>
        <p>{title}</p>
        <span>{arrow}</span>
      </div>
      <div className={open ? `${className}__show` : `${className}__hide`}>
        {children}
      </div>
    </div>
  );
};
