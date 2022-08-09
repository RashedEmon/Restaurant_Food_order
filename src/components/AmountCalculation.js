const calculation={
    display: "flex",
    justifyContent: "space-evenly",
    width: "93%",
    margin: "0px auto",
    padding: "10px",
    backgroundColor: "#393939",
    color: "#FFFFFF"
}


const Calculation = ({count,amount})=>{
    return (
        <div style={calculation}>
           <div className="count">
               <h5>Total Item: {count}</h5>
           </div>
           <div className="amount">
                <h5>Total Amount: {amount}</h5>
           </div>
       </div>
    );
};
export default Calculation;