import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Lace1 from '../../images/shoelaces-1.jpg'
import Lace2 from '../../images/shoelaces-2.jpg'
import Lace3 from '../../images/shoelaces-3.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SUB_SHIPPING } from '../actions/action-types/cart-actions'

const FAKE_DESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.";
const complex = {
    count: {
        1: 1.5,
        2: 2
    },
    filter: {
        id: 1,
        field: 'type',
        value: 'lace',
        filter: {
            id: 1,
            field: 'brand',
            value: '*'
        }
    }
}
const baseShoe = {desc: FAKE_DESCRIPTION, type: 'shoe'}
const initState = {
    items: [
        {id:1,title:'Winter body',  price:110, img:Item1, brand: 'Adidas', complex, ...baseShoe},
        {id:2,title:'Adidas', price:80, img: Item2, brand: 'Adidas', ...baseShoe},
        {id:3,title:'Vans', price:120, img: Item3, brand: 'Vans', ...baseShoe},
        {id:4,title:'White', price:260, img:Item4, brand: 'Vans', ...baseShoe},
        {id:5,title:'Cropped-sho', price:160, img: Item5, brand: 'Crocs', ...baseShoe},
        {id:6,title:'Blues', price:90, img: Item6, brand: 'Crocs', ...baseShoe},
        {id:7,title:'Shoe synthetic lace', desc: FAKE_DESCRIPTION, price:10, img: Lace1, type: 'lace'},
        {id:8,title:'Shoe natural lace', desc: FAKE_DESCRIPTION, price:10, img: Lace2, type: 'lace'},
        {id:9,title:'Shoe leather lace', desc: FAKE_DESCRIPTION, price:10, img: Lace3, type: 'lace'},
    ],
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type === SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 6
        }
  }

    return state
}

export default cartReducer