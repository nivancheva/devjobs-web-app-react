import './Input.css';

export default function Input({ image, placeholder, reverse }) {
    return (
        <div className={`input-wrapper ${reverse ? "reverse" : ""}`}>
            <img className="input-icon" src={image}/>
            <input className="input" placeholder={placeholder}/>
        </div>
    )
}