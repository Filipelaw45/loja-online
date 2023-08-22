import './Header.css'
import logo from '../assets/logo.svg'

function Header(){
    return (
        <div className='container'>
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Header