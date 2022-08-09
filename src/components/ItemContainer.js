import style from './itemContainer.module.css';


const ItemContainer = ({children})=>{
    return (
        <div className={style.itemContainer}>
            {children}
        </div>
    );
}
export default ItemContainer;