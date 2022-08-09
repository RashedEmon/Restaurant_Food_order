import Layout from "../components/Layout";
import Section from "../components/Section";
import Headline from "../components/Headline";
import MenuHeader from "../components/MenuHeader";
import DropDown from "../components/DropDown";
import CartButton from "../components/CartBtn";
import ItemContainer from "../components/ItemContainer";
import Item from "../components/Item";
import items from "../info/items";
import { useSelector } from "react-redux";
import { useState } from "react";

const MenuPage = ()=>{
    const count = useSelector((state)=> state.cart.totalCount);
    const [value,setValue] = useState("All");
    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    return (
        <Layout>
            <Section>
                <Headline title={"Menu"}/>
                <MenuHeader>
                    <DropDown title={"Categories"} options={["All","Fast Food","Drinks","Chinese","Bangladeshi","Thai"]} handleChange={handleChange} value={value}/>
                    <CartButton icon={"fa-solid fa-fork-knife"} count={count}/>
                </MenuHeader>
                <ItemContainer>
                    {items.map((item)=>{
                        if(value === "All"){
                            return (<Item key={item.id} item={item}/>)
                        }
                        if(item.category === value){
                            return (<Item key={item.id} item={item}/>);
                        }else{
                            return "";
                        }

                    })}
                </ItemContainer>
            </Section>
        </Layout>
    )
}
export default MenuPage;