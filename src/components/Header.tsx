import React from 'react'

const Header = () => {
    return (
        <nav className={'py-7 flex justify-between items-center font-bold'}>
            <a className={'text-3xl'} href="/">
                <span className={'text-color-main mr-1'}>Marvel</span>
                information portal
            </a>
            <div className={'text-2xl'}>
                <a className={'text-color-main'} href="/characters">Characters</a>
                <span className={'mx-1'}>/</span>
                <a className={'text-black'} href="/comics">Comics</a>
            </div>
        </nav>
    )
}

export default Header
