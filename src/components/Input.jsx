import './Input.css';

export default function Input({ image, placeholder, reverse, value, onChange }) {
    return (
        <div className={`input-wrapper ${reverse ? "reverse" : ""}`}>
            <img className="input-icon" src={image}/>
            <input value={value} onChange={(e) => onChange(e.target.value)} className="input" placeholder={placeholder}/>
        </div>
    )
}