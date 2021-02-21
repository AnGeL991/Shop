import {Reducer} from 'redux';
import {OrderActionTypes,OrderState} from './types';

export const initialState:OrderState ={
  data: {
    id:0,
    items:[]
  },
  errors:undefined,
  loading:false,
};

const reducer:Reducer<OrderState> =(state =initialState,action) =>{
  switch(action.type){
    case OrderActionTypes.START_LOAD_ORDER: {
      return {...state,loading:true};
    }
    case OrderActionTypes.END_LOAD_ORDER: {
      return {...state,loading:false,data:action.payload};
    }
    case OrderActionTypes.ERROR_LOAD_ORDER: {
      return {...state,loading:false,errors:action.payload}
    }
    case OrderActionTypes.ADD_TO_ORDER: {
      return {
        errors:state.errors,
        loading:state.loading,
        data: {
          ...state.data,
          id:state.data.id + 1,
          items:[...state.data.items,action.payload]
        }
      };
    }
    default:{
      return state;
    }
  }
}
export {reducer as orderReducer};