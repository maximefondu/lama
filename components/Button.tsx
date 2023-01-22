type Props = {
    children: any
    type: 'submit' | 'button'
    className: string
}
export const Button = (props: Props) => {
    return (
        <button
            type={props.type}
            className={`${props.className} bg-primary rounded text-white text-sm font-bold px-8 py-4`}
        >
            {props.children}
        </button>
    )
}
