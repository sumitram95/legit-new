import { forwardRef, useEffect, useRef } from "react";
import SelectInputLists from "./map/SelectInputList";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function SelectInput(
    { className = "", isFocused = false, options = null, label, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="">
            <label
                className="block tracking-wide text-gray-500 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
            >
                {label}
            </label>

            <Select
                id="select"
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options}
            />
        </div>
    );
}