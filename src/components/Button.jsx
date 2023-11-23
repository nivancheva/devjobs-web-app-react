export default function Button({ children, primary, onClick }) {
    return (
        <div>
            <button onClick={onClick} className={`mobile-button button ${primary ? "button-primary" : "button-secondary"}`}>{children}</button>
        </div>
    )   
}