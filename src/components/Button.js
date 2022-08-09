const style = {
    orderButton: {
        width: "100px",
        backgroundColor: "#EF5EA8",
        margin: "5px auto",
        cursor: "pointer",
        '>h3':{
            margin: "auto",
            width: "50%",
            padding: "5px"
        }
    }
    
}


const Button = ({text})=>{
    return (
        <div style={style.orderButton}>
            <h3 style={style.orderButton[">h3"]}>{text}</h3>
       </div>
    );
}
export default Button;