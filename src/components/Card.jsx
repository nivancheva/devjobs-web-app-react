import './Card.css';

export default function Card({ logo, postedAt, contract, position, company, location }) {
    return (
        <div className='card-container'>
            <div className='logo-wrapper'>
                <img className='logo' src={logo}/>
            </div>
            <div>
                <div>
                    <p className='post-aded'>{postedAt} <span className='contract-type'>{contract}</span></p>
                    <h3 className='position'>{position}</h3>
                    <p className='company-name'>{company}</p>
                </div>
                <p className='company-location'>{location}</p>
            </div>
        </div>
    )
}