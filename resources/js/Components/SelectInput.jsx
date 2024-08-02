import { forwardRef, useEffect, useRef } from "react";
import SelectInputLists from "./map/SelectInputList";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default forwardRef(function SelectInput(
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

            {/* <select
                className={
                    "appearance-none block w-full bg-slate-100 text-gray-700 border border-slate-300 rounded py-3 px-4 mb-3 " +
                    className
                }
                id="grid-state"
                ref={input}
                {...props}
            >
                {SelectInputLists[listName].name.map((name, index) => (
                    <option
                        key={SelectInputLists[listName].value[index]}
                        value={SelectInputLists[listName].value[index]}
                    >
                        {name}
                    </option>
                ))}
            </select> */}
        </div>
    );
});
