import Image, { StaticImageData } from "next/image";

export interface IHeaderProps {
    placeholder: string;
    onChange: Function;
    value: string;
    labelName: string;
    disabled: boolean;
}

const InputText = ({
    labelName = "Input value",
    placeholder = "Input here",
    onChange = (f) => f,
    value = "anonymous",
    disabled = false,
    ...props
}: IHeaderProps) => {
    return (
        <div className="p-4 items-center">
            <p>{labelName}</p>
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                className="border-b border-blue outline-none"
                disabled={disabled}
            />
        </div>
    );
};

export default InputText;
