import './Header.css';
import Toggle from '../components/Toggle';
import logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <div className='flex header-wrapper'>
            <img src={logo}/>
            <Toggle />
        </div>
    )
}