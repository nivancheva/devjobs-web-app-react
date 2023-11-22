
export default function Input({ onsubmit, image, placeholder }) {
    return (
        <form>
            <img className="input-icon" src={image}/>
            <input className="input" placeholder={placeholder}/>
        </form>
    )
}