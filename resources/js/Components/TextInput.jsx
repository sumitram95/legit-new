import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            id="grid-first-name"
            type={type}
            className={
                "appearance-none block w-full bg-slate-100 text-gray-700 border border-slate-300 rounded py-3 px-4 mb-3" +
                className
            }
            ref={input}
        />
    );
});
