import style from './CircleButton.module.css';


const CircleButton = ({symbol,addToCartHandler})=>{

    
    return (
        <div className={style.addButton} onClick={addToCartHandler}>
            <div id={style.plusSign}>{symbol}</div>
        </div>
    )
}
export default CircleButton;