import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <nav className={'py-7 flex justify-between items-center font-bold'}>
            <Link className={'text-3xl'} to='/'>
                <span className={'text-color-main mr-1'}>Marvel</span>
                information portal
            </Link>
            <div className={'text-2xl'}>
                <NavLink end style={({isActive}) => ({'color': isActive ? 'rgb(153, 27, 27)' : 'inherit'})} to='/' className={'text-black'}>Characters</NavLink>
                <span className={'mx-1'}>/</span>
                <NavLink style={({isActive}) => ({'color': isActive ? 'rgb(153, 27, 27)' : 'inherit'})} to='/comics' className={'text-black'}>Comics</NavLink>
            </div>
        </nav>
    )
}

export default Header
