import "./RadioButton.css";

function RadioButton(props) {

    const { name, checked, onChange, label } = props 

    return (
    <label>               
        <input
            type="radio"
            name={name}
            checked={checked}
            onChange={onChange}
        />
        {label}
    </label>
    );
}

export default RadioButton