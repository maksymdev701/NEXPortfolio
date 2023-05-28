export interface IHeaderProps {
    title: string;
}

export const Header = ({ title }: IHeaderProps) => {
    return (
        <h1>{title}</h1>
    )
}