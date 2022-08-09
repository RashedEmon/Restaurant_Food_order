import { Link } from 'react-router-dom';
import CircleButton from './CircleButton';
import style from './Item.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { cartAction } from '../store/cartSlice';

const internalStyle = {
    btnGroup:{
            display: "flex",
            '>div':{
                margin: "0px 10px",
              }
          }
}

    const Item = ({item})=>{


    const dispatch = useDispatch();

    const addToCartHandler=(item)=>{
        console.log(item);
        dispatch(cartAction.addToCart(item));
    }


    return (
        <div id={style.items}>
            <div className={style.item}>
            <Link to={`/item/${item.name}`} style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                    <div className={style.imgName}>
                        <div>
                            <img alt={"foodImage"} src={item.url} height={"50px"} width={"50px"}/>
                        </div>
                        <div className={style.itemNameAndPrice}>
                            <h3>{item.name}  ({item.category})</h3>
                            <h5>{item.price}</h5>
                        </div>
                    </div>
                </Link>

                <div style={internalStyle.btnGroup}>
                    <CircleButton symbol={"+"} addToCartHandler={()=>addToCartHandler(item)}/>
                </div>
       
            </div>
        </div>
    );
}
export default Item;