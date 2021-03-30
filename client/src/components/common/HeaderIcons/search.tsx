import { FunctionComponent, useMemo } from "react";
import { Icons } from "components/common";
import { useToggleClick, useFilterValue } from "_hooks";

export const Search: FunctionComponent = () => {
  const { open, handleToggle } = useToggleClick();
  const { handleSetSearch } = useFilterValue();

  const { OutLineClose, OutLineSearch, SearchIcon } = Icons;

  const icon = useMemo(
    () =>
      open ? (
        <OutLineClose color="white" size="28" />
      ) : (
        <SearchIcon color="white" size="28" />
      ),
    [open, OutLineClose, SearchIcon]
  );

  const searchInput = useMemo(
    () =>
      open && (
        <div className="header__search">
          <input
            className="input"
            type="test"
            placeholder="Search Products..."
            onChange={handleSetSearch}
          />
          <OutLineSearch className="icon" size="24" />
        </div>
      ),
    [open, OutLineSearch, handleSetSearch]
  );

  return (
    <>
      <div onClick={handleToggle} className="icon">
        {icon}
      </div>
      {searchInput}
    </>
  );
};
