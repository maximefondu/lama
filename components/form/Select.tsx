import ArrowIcon from '@svg/arrow.svg'

type Props = {
    register: any
    errors?: any
    label?: string
    options: {
        name: string | number
        value: string | number
    }[]
    name: string
    id?: string
    placehoder: string
}

export const Select = ({ register, errors, label, name, id, options, placehoder }: Props) => {
    const error = errors && errors[name]?.message

    return (
        <>
            <div className="flex flex-col">
                {label && (
                    <label className={'font-medium mb-4'} htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className={'relative'}>
                    <select
                        {...register(name)}
                        id={id}
                        name={name}
                        className={`cursor-pointer appearance-none w-full bg-grey-200 px-8 py-4 rounded outline-none border border-grey-300 transition-all focus:border-grey-600 ${
                            error && 'animate-shake !border-error'
                        }`}>
                        <option value={''}>{placehoder}</option>
                        {options.map((option) => {
                            return (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            )
                        })}
                    </select>
                    <ArrowIcon className={'absolute top-1/2 right-8 -translate-y-1/2 w-8'} />
                </div>
            </div>
            {error && <p className={'mt-2 text-error font-medium'}>{error}</p>}
        </>
    )
}
