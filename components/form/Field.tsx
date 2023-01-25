type Props = {
    register: any
    errors?: any
    label?: string
    name: string
    id?: string
    placeholder?: string
}

export const Field = (props: Props) => {
    const error = props.errors && props.errors[props.name]?.message

    return (
        <>
            <div className="flex flex-col">
                {props.label && (
                    <label className={'font-medium mb-4'} htmlFor={props.id}>
                        {props.label}
                    </label>
                )}
                <input
                    className={`bg-grey-200 px-8 py-4 rounded placeholder:text-grey-600 outline-none border border-grey-200 transition-all focus:border-grey-600 ${
                        error && 'animate-shake !border-error'
                    }`}
                    id={props.id}
                    placeholder={props.placeholder}
                    {...props.register(props.name)}
                />
            </div>
            {error && <p className={'mt-2 text-error font-medium'}>{error}</p>}
        </>
    )
}
