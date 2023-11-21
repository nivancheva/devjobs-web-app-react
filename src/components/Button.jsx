export default function Button({ nameButton, buttonClass }) {
    return (
        <div>
            <button className={`button ${buttonClass}`}>{nameButton}</button>
        </div>
    )   
}