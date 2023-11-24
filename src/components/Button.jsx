export default function Button({ children, primary, onClick, href }) {
    return (
        <>
            { href ?
                <a href={href} target="_blank" className={`button ${primary ? "button-primary" : "button-secondary"}`}>{children}</a>
                :
                <button onClick={onClick} className={`button ${primary ? "button-primary" : "button-secondary"}`}>{children}</button>
            }
        </>
    )   
}