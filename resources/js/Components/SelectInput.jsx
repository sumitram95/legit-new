import { forwardRef, useEffect, useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectInput = forwardRef(
    (
        {
            isFocused = false,
            label,
            options = [],
            onChange,
            value = [],
            className = "",
            ...props
        },
        ref
    ) => {
        const input = ref ? ref : useRef();

        useEffect(() => {
            if (isFocused) {
                input.current.focus();
            }
        }, [isFocused]);

        return (
            <div className={`mb-4 ${className}`}>
                <label
                    className="block uppercase tracking-wide text-secondary text-xs font-bold mb-2"
                >
                    {label}
                </label>

                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={options}
                    onChange={onChange}
                    value={value} // Set the value based on the parent component's state
                    className="basic-multi-select"
                    classNamePrefix="select"
                    {...props}
                />
            </div>
        );
    }
);

export default SelectInput;
