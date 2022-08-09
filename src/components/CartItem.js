import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './CartItem.module.css';
import { cartAction } from '../store/cartSlice';

const CartItem =({item})=>{
    const {id,name,price,url,count} = item;
    const dispatch = useDispatch();
    const handleIncrement=(item)=>{
      dispatch(cartAction.increment(item));
    }

    const handleDecrement=(item)=>{
      dispatch(cartAction.decrement(item));
    }

    const handleRemove = (item)=>{
      dispatch(cartAction.removeFromCart(item));
    }
    return (
        <div id={style.items}>
       <div className={style.item}>
         <Link to={{pathname: `/item/${id}`,state: {id: item.id, name: item.name}}} style={{textDecoration: "none"}}>
            <div className={style.imgName}>
            <div>
                <img alt={"name"} src={url} height="50px" width="50px"/>
            </div>
            <div className={style.itemNameAndPrice}>
                <h3>{name}</h3>
                <h5>{price}</h5>
            </div>
            </div>
         </Link>
         <div>
           <span>{count}x{price}={price*count}</span>
         </div>
         <div className={style.buttonGroup}>
           <div className={style.addButton} onClick={()=>handleIncrement(item)}>
               <p className={style.sign}>+</p>
           </div>
           <div className={style.addButton} onClick={()=> handleDecrement(item)}>
               <p className={style.sign}>-</p>
           </div>
           <div className={style.addButton} onClick={()=> handleRemove(item)}>
               <p className={style.sign}>x</p>
           </div>
         </div>
       </div>
     </div>
    );
}
export default CartItem;