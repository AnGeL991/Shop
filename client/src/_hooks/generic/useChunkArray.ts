import { useState, useEffect } from "react";
import { useGetState } from "_hooks";

export const useChunkArray = (
  array: Array<{}>,
  amountInChunk: number,
  handleSetSlice: (slice: number) => void
) => {
  const [activePage, setActivePage] = useState(1);
  const {
    inventory: { category },
  } = useGetState();

  useEffect(() => {
    setActivePage(1);
    handleSetSlice(1);
  }, [category]);

  const chunk = array.reduce((chunk: number) => {
    chunk = Math.ceil(array.length / amountInChunk);
    return chunk;
  }, 1);
  const nextPage = () => {
    if (chunk === 1 || activePage + 1 > chunk) {
      return;
    }
    handleSetSlice(activePage + 1);
    setActivePage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (chunk === 1 || activePage - 1 === 0) {
      return;
    }
    handleSetSlice(activePage - 1);
    setActivePage((prev) => prev - 1);
  };
  const handleSetPage = (page: number) => {
    setActivePage(page);
    handleSetSlice(page);
  };

  return { activePage, prevPage, nextPage, chunk, handleSetPage };
};
