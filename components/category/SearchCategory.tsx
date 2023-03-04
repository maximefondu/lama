'use client'

import { ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

import SearchIcon from '@svg/search.svg'

export const SearchCategory = () => {
    const router = useRouter()
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget
        const value = input.value

        const url = new URL(window.location.href)
        url.searchParams.set('search', value)
        router.push(url.toString())
    }
    return (
        <div className={'mb-8'}>
            <label htmlFor="search" className={'relative flex max-w-[32rem]'}>
                <input
                    className={
                        'w-full shadow-md px-8 py-4 rounded placeholder:text-grey-600 outline-none border border-grey-200 transition-all focus:border-grey-600 text-sm'
                    }
                    type={'text'}
                    id={'search'}
                    name={'search'}
                    placeholder={'Get category'}
                    onChange={search}
                />
                <SearchIcon className={'w-6 pointer-events-none absolute top-1/2 right-8 -translate-y-1/2'} />
            </label>
        </div>
    )
}
