const style={
        headline:{
            textAlign: "center",
            padding: "5px",
            backgroundColor: "#55555A",
            marginBottom: "2vw",
            color: "#FFFF"
        }
}
const Headline=({title})=>{
    return (
        <h2 style={style.headline}>{title}</h2>
    )
}
export default Headline;