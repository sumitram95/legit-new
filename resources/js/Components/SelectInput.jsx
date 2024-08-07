import { forwardRef, useEffect, useRef } from "react";
import SelectInputLists from "./map/SelectInputList";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function SelectInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        listName = null,
        label,
        ...props
    },
    ref
) {
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
                for="grid-last-name"
            >
                {label}
            </label>

            <Select
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={SelectInputLists[listName]}
            />
        </div>
    );
}
