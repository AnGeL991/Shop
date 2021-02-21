import { ChangeEvent, ChangeEventHandler, FunctionComponent, MouseEventHandler, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';


export const Search: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen: MouseEventHandler = () => {
    setOpen((prev) => !prev)
  }
  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const icon = open ? <AiOutlineClose color="white" size='28' /> : <BsSearch color="white" size="28" />

  const searchInput = open &&
    <div className='header__search'>
      <input className='input' type='test' placeholder='Search Products...' value={value} onChange={handleChange} />
      <AiOutlineSearch className='icon' size='24' />
    </div>


  return (
    <>
      <div onClick={handleOpen} className="icon">
        {icon}
      </div>
      {searchInput}
    </>

  );
};
