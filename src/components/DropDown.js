import { useState } from "react"

const style={
    customSelect:{
        position: "relative",
        fontFamily: "Arial",
        color: "#EF5EA8",
        cursor: "pointer"
    }
}


const DropDown = ({title,options,handleChange,value})=>{
    
    return (
        <div style={style.customSelect}> {title}: 
            <select value={value} onChange={(e)=>handleChange(e)}>
                {options.map((option)=>(
                    <option>{option}</option>
                ))}
            </select>
        </div>
    )
}
export default DropDown;