import { FC } from "react";
import { Icons } from "components/common";
import { Circle } from "./circle";
import { Link } from "react-router-dom";
import { useGetState } from "_hooks";

export const Best: FC = () => {
  const { wish } = useGetState();
  return (
    <div className="icon">
      <Link to="/wish">
        <Icons.HeartIcon size="28" />
        <Circle amount={wish.data.length} />
      </Link>
    </div>
  );
};
