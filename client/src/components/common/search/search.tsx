import { FunctionComponent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useToggleClick, useFilterValue } from '_hooks';

export const Search: FunctionComponent = () => {
  const { open, handleToggle } = useToggleClick();

  const { handleSetSearch } = useFilterValue();

  const icon = open ? (
    <AiOutlineClose color="white" size="28" />
  ) : (
    <BsSearch color="white" size="28" />
  );

  const searchInput = open && (
    <div className="header__search">
      <input
        className="input"
        type="test"
        placeholder="Search Products..."
        onChange={handleSetSearch}
      />
      <AiOutlineSearch className="icon" size="24" />
    </div>
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
