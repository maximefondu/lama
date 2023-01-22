type Props = {
    register: any
    label?: string
    name: string
    id?: string
    placeholder?: string
}

export const Field = (props: Props) => {
    return (
        <div className="flex flex-col">
            {props.label && (
                <label className={'font-medium mb-4'} htmlFor={props.id}>
                    {props.label}
                </label>
            )}
            <input
                className={
                    'bg-grey-200 text-sm px-8 py-4 rounded placeholder:text-grey-600 outline-none border border-grey-200 transition-all focus:border-grey-600'
                }
                id={props.id}
                placeholder={props.placeholder}
                {...props.register(props.name)}
            />
        </div>
    )
}
