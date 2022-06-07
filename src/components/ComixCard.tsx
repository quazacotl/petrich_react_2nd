import {Comix} from "../interfaces/interfaces";
import {Link} from "react-router-dom";

interface ComixCardProps {
    comix: Comix
}

const ComixCard = (props:ComixCardProps) => {
    const comix = props.comix
    return (
        <Link className={'w-[225px]'} tabIndex={0} to={`/comics/${comix.id}`}>
            <div className={'w-[225px] h-[346px] bg-gray-300'}>
                <img className={'w-full h-full object-cover'} src={comix.thumbnail} alt="comix-art"/>
            </div>
            <div className={'text-comix-name mt-2.5'}>{comix.title}</div>
            <div className={'text-comix-name text-gray-400 mt-2'}>{`${comix.price} $`}</div>
        </Link>
    )
}

export default ComixCard
