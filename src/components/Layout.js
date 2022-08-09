import { Link } from "react-router-dom";

const Layout = ({children})=>{
    return (
        <div className="container">
            <Link to="/" style={{textDecoration: "none"}}>
                <h1 className="center">Cafeotheque</h1>
            </Link>
            
            {children}
        </div>
    )
}

export default Layout;