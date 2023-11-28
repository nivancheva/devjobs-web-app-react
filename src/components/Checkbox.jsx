import './Checkbox.css'

export default function Checkbox({value, onChange}) {
    return (
        <div>
            <label className="container-checkbox">
                    <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
                    <span className="checkmark"></span>
            </label>
        </div>
    )
}