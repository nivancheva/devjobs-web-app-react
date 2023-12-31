import './Card.css';

export default function Card({ id, logo, postedAt, contract, position, company, location,  logoBackground, onClick }) {
    return (
        <div className='card-container'>
            <div className='logo-wrapper' style={{backgroundColor: logoBackground}}>
                <img className='logo' src={logo}/>
            </div>
            <div>
                <div>
                    <div className='flex post'>
                        <p className='post-aded'>{postedAt}</p>
                        <p className='contract-type'>{contract}</p>
                    </div>
                    <h3 onClick={() => onClick(id)} className='position'>{position}</h3>
                    <p className='company-name'>{company}</p>
                </div>
                <p className='company-location'>{location}</p>
            </div>
        </div>
    )
}