import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SelectInput = ({ label, options, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <Select
            components={makeAnimated()}
            options={options}
            isMulti
            value={options.filter(option => value.includes(option.value))}
            onChange={onChange}
        />
    </div>
);

export default SelectInput;
