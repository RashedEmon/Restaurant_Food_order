import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList:[],
        totalCount: 0,
        totalPrice: 0
    },
    reducers:{
        addToCart(state,action){
            const existingItem = state.itemList.find((item)=>(item.id === action.payload.id));
            if(existingItem){
                existingItem.count+=1;
                state.totalPrice+=parseInt(existingItem.price)
            }else{
                state.itemList.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    category: action.payload.category,
                    url: action.payload.url,
                    count: 1,
                    price: parseInt(action.payload.price),
                })
                state.totalCount+=1;
                state.totalPrice+=parseInt(action.payload.price);

            };
        },
        removeFromCart(state,action){
            const existingItem = state.itemList.find((item)=>(item.id === action.payload.id));
            if(existingItem){
                state.itemList=state.itemList.filter((item)=> (item.id !== action.payload.id));
                state.totalCount-=1;
                state.totalPrice-=(existingItem.price*existingItem.count);
            }
        },
        increment(state,action){
            const existingItem = state.itemList.find((item)=>(item.id === action.payload.id));
            if(existingItem){
                existingItem.count+=1;
                state.totalPrice+=existingItem.price;
            }
        },
        decrement(state,action){
            const existingItem = state.itemList.find((item)=>(item.id === action.payload.id));
            if(existingItem && existingItem.count>1){
                existingItem.count-=1;
                state.totalPrice-=existingItem.price;
            }
        }
    }
});

const cartAction=cartSlice.actions; 

export {cartSlice,cartAction};