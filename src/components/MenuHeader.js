const style={
    fixedHeader:{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2rem"
    }
}

const MenuHeader =({children})=>{
    return (
        <div style={style.fixedHeader}>
            {children}
        </div>
    )
}
export default MenuHeader;