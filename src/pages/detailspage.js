import DetailCard from "../components/detailCard";
import Layout from "../components/Layout";
import Section from "../components/Section";
import style from '../components/detailCard.module.css';
import { useLocation } from "react-router-dom";
const DetailPage = ()=>{
    const location = useLocation();
    

    // const sliceString=(str)=>{
    //     let temp="";
    //     let i=str.length-1;
    //     while(i>=0){
    //         if(str[i]==='/'){
    //             return temp;
    //         }
    //         temp=str[i]+temp;
    //         i-=1;
    //     }
    // }
    console.log(location);
    return (
        <Layout>
            <Section>
                <DetailCard  name={"Burger"} price={300} description={"gbmtgmgkbmfg fkgibmfgmbf fgibfrg fifg brfgnf ig gbkm fnmrgf bfgnbifg fgb nrib "} category={"Fast Food"}/>
            </Section>
            <div className={style.orderButton}>
                <h3>Order</h3>
            </div>
        </Layout>
    );
}

export default DetailPage;

