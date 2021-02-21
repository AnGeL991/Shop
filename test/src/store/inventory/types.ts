export interface Inventory {
  id:number,
  title:string,
  image:string,
  price:number | string,
  star:number,
}

export enum InventoryActionTypes {
  START_REQUEST = 'START_REQUEST',
  END_REQUEST = 'END_REQUEST',
  ERROR_REQUEST = 'ERROR_REQUEST',
}

export interface InventoryState {
  readonly loading:boolean,
  readonly data:Inventory[];
  readonly errors?:string,
}