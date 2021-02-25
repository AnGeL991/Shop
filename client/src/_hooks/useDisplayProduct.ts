import { Inventory, SortOPtion } from 'store/inventory';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'store'

export const useDisplayProduct = () => {
  const { data, search, price, sort, category } = useSelector((store: ApplicationState) => store.inventory)

  let displayArray: Array<Inventory> = data;


  const recomendedProduct = data.filter(el=>el.star > 3)
  const dealProduct = data.filter(el => el.discount !== 0 )
  
  const sortArray = (sort: string) => {
    switch (sort) {
      case SortOPtion.DEFAULT: {
        return displayArray;

      }
      case SortOPtion.TO_HIGHT_PRICE: {
        displayArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
        break;
      }
      case SortOPtion.TO_LOW_PRICE: {
        displayArray.sort((a, b) => (a.price < b.price) ? 1 : -1)
        break;
      }
      case SortOPtion.POPULAR_SORT: {
        return displayArray
      }
      case SortOPtion.NEW_PRODUCTS: {
        return displayArray
      }
      default:
        break;
    }
  }

  if (category !== '') {
   displayArray = displayArray.filter((el) => el.category === category)
  }
  if  (search !== '') {
   displayArray= displayArray.filter(el => el.title === search)
  }
  if (price !== 0) {
  console.log(price)
  displayArray = displayArray.filter(el => el.price >= price)
  }
  if (sort !== '') {
    sortArray(sort) 
  } 

  return {displayArray,recomendedProduct,dealProduct} 
}