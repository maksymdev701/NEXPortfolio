import Image, { StaticImageData } from "next/image";

export interface IHeaderProps {
    imgSrc: StaticImageData;
    imgAlt: string;
    placeholder: string;
    onChange: Function;
    disabled: boolean;
    onClose: Function;
    value: string;
}

const Card = ({
    imgSrc,
    imgAlt = "Image not loaded",
    placeholder = "Input value",
    onChange = (f) => f,
    onClose = (f) => f,
    value = "anonymous",
    disabled = false,
    ...props
}: IHeaderProps) => {
    return (
        <div
            className="p-6 flex flex-row max-w-2xl mx-auto bg-white shadow-lg border items-center border-gray rounded-xl space-x-4 w-full inline-flex"
            {...props}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                className="float-left h-12 w-12 "
            ></Image>
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border-b border-blue outline-none flex-1"
                disabled={disabled}
            />
            <i
                className="material-icons  cursor-pointer"
                style={{ fontSize: 32 }}
                onClick={onClose}
            >
                close
            </i>
        </div>
    );
};

export default Card;
