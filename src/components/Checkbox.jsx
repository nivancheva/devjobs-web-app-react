import './Checkbox.css'

export default function Checkbox({selected, onChange}) {
    return (
        <div>
            <label className="container-checkbox">
                    <input type="checkbox" checked={selected} onChange={onChange} />
                    <span className="checkmark"></span>
            </label>
        </div>
    )
}