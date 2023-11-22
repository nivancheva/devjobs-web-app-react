import './Card.css';
import scoot from '../assets/logos/scoot.svg'

export default function Card() {
    return (
        <div className='card-container'>
            <div className='logo-wrapper'>
                <img className='logo' src={scoot}/>
            </div>
            <div>
                <div>
                    <p className='post-aded'> 5h ago <span className='contract-type'>Full Time</span></p>
                    <h3 className='position'>Senior Software Engineer</h3>
                    <p className='company-name'>Scoot</p>
                </div>
                <p className='company-location'>United Kingdom</p>
            </div>
        </div>
    )
}