type Props = {
    register: any
    errors?: any
    type?: 'text' | 'number' | 'email'
    label?: string
    name: string
    id?: string
    placeholder?: string
}

export const Field = ({ register, errors, type = 'text', label, name, id, placeholder }: Props) => {
    const error = errors && errors[name]?.message

    return (
        <div className="flex flex-col">
            {label && (
                <label className={'font-medium mb-4'} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                className={`bg-grey-200 px-8 py-4 rounded placeholder:text-grey-600 outline-none border border-grey-300 transition-all focus:border-grey-600 ${
                    error && 'animate-shake !border-error'
                }`}
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <p className={'mt-2 text-error font-medium'}>{error}</p>}
        </div>
    )
}
