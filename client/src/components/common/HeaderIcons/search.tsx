import { FunctionComponent, useMemo } from "react";
import { Icons,Button } from "components/common";
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
    () => (
      <div
        className={`header__search ${open ? "header__search--active" : ""} `}
      >
        <input
          className="header__input"
          type="test"
          placeholder="Search Products..."
          onChange={handleSetSearch}
        />
        <OutLineSearch className="icon" size="24" />
        <Button className='header__searchButton'>Search</Button>
      </div>
    ),
    [open, OutLineSearch, handleSetSearch]
  );

  return (
    <>
      <div onClick={handleToggle} className="icon header__icon">
        {icon}
      </div>
      {searchInput}
    </>
  );
};
