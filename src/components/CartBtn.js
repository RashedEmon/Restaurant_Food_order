import {NavLink} from 'react-router-dom';

const style = {
    icon:{
        position: "relative",
        color: "#FFFFFF",
        cursor: "pointer"
    },
    upperNumber:{
        position: "absolute",
        top: "-8px",
        right: "-5px"
    }
}

const CartButton =({icon,count})=>{
    return (
        <NavLink to={"cart"}>
            <div style={style.icon}>
            <div style={{color: "#EF5EA8", fontSize: "30px"}}>
                <i class="fa-solid fa-cart-arrow-down"></i>
            </div>
            <div style={style.upperNumber}>{count}</div>
            </div>
        </NavLink>
    )
}
export default CartButton;