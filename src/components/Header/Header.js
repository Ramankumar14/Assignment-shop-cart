
import "./header.scss"
import LeftNav from "./Navigation/LeftNav"
import RightNav from "./Navigation/RightNav"

const Header =(props)=>{
    return(
        <header className="header">
            <div className="header__main">
               <LeftNav/>
               <RightNav cartItems={props.cartItems} openCartWindow={props.openCartWindow}/>
            </div>

        </header>
    )
}

export default Header