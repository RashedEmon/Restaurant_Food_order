import style from './detailCard.module.css';

const DetailCard = ({name,price,category,description,url})=>{
    return (
        <>
            <div id={style.img}>
                <img alt="item" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
            </div>
            <div className={style.priceName}>
                <h4>Item name: {name}</h4>
                <h4>price: {price}tk</h4>
                <h4>Category: {category}</h4>
            </div>
            <div className={style.description}>
                {description}
            </div>
        </>
    );
};
export default DetailCard;