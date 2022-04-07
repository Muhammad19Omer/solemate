import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="nav-wrapper" style={{height: "80px"}}>
            <div className="container">
                <Link to="/" className="brand-logo" style={{fontSize: "50px"}}>
                    SoleMate
                </Link>
                
                
            </div>
            <ul className="right">
            <li>
                <Link to="/signin" className="login">
                    Login
                </Link>
            </li>
        </ul>
        </nav>
        
    )

}
export default Navbar;