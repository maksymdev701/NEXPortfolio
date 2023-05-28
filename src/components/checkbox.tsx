import { useState } from "react";

export interface IHeaderProps {
    checked: boolean;
    labelName: string;
    onChange: Function;
    value: string;
    disabled: boolean;
}

const Checkbox = ({
    checked = true,
    labelName = "Anonymous",
    onChange = (f: any) => f,
    disabled: boolean,
    value = "",
    disabled = false,
    ...props
}: IHeaderProps) => {
    return (
        <div {...props}>
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4"
                disabled={disabled}
            />
            <label
                htmlFor={value}
                onClick={(e) => onChange(!checked)}
                className="pl-4"
            >
                {labelName}
            </label>
        </div>
    );
};

export default Checkbox;
