import Headline from "../components/Headline";
import ItemContainer from "../components/ItemContainer";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CartItem from "../components/CartItem";
import Calculation from "../components/AmountCalculation";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const CartPage = ()=>{
    const items = useSelector((state)=>state.cart.itemList);
    const totalCount= useSelector((state)=>state.cart.totalCount);
    const totalPrice= useSelector((state)=>state.cart.totalPrice);
    console.log(items);
    return (
        <Layout>
            <Section>
                <Headline title={"Cart"}/>
                <ItemContainer>
                    {items.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                    ))}
                </ItemContainer>
            </Section>
            <Calculation count={totalCount} amount={totalPrice}/>
            <Button text={"Order"}/>
        </Layout>
    );
}
export default CartPage;