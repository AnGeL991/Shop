import {Reducer} from 'redux';
import {InventoryActionTypes,InventoryState} from './types';

export const initialState:InventoryState ={
  data:[],
  loading:false,
  errors:undefined,
}

const reducer: Reducer<InventoryState>=(state=initialState,action)=>{
  switch(action.type) {
    case InventoryActionTypes.START_REQUEST: {
      return {...state,loading:true};
    }
    case InventoryActionTypes.END_REQUEST: {
      console.log("action payload",action.payload);
      return {...state, loading:false, data: action.payload};
    }
    case InventoryActionTypes.ERROR_REQUEST: {
      return {...state,loading:false,errors:action.payload}
    }
    default: {
      return state;
    }
  }
}
export {reducer as InventoryReducer};