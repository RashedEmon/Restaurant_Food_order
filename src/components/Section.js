import style from './Section.module.css';


const Section = ({children})=>{
    return (
        <div className={style.section}>
            {children}
        </div>
    );
}
export default Section;