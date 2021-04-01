import { FunctionComponent, ReactNode, CSSProperties, useMemo } from "react";
import { Icons } from "components/common";
import { useToggleClick } from "_hooks";
import "./style/readMore.scss";

type ReadMoreProps = {
  title: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ReadMore: FunctionComponent<ReadMoreProps> = ({
  title,
  children,
  className = "readMore",
  style,
}) => {
  const { open, handleToggle } = useToggleClick();
  const { ArrowDown, ArrowUp } = Icons;

  const arrow = useMemo(
    () =>
      open ? (
        <ArrowUp className={`${className}__icon`} />
      ) : (
        <ArrowDown className={`${className}__icon`} />
      ),
    [open, className, ArrowDown, ArrowUp]
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
