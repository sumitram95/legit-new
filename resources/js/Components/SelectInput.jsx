import { forwardRef, useEffect, useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectInput = forwardRef(
    (
        {
            type = "text",
            className = "",
            isFocused = false,
            listName = null,
            label,
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
            <div className="mb-4">
                <label
                    className="block uppercase tracking-wide text-secondary text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                >
                    {label}
                </label>

                <Select
                    id="select"
                    isMulti
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={listName} // Use the listName prop directly
                    {...props}
                />
            </div>
        );
    }
);

export default SelectInput;
