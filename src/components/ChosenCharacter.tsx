import {useState} from "react";
import {ICharItem, IComicsItem} from "../interfaces/interfaces";
import useMarvelService from "../services/MarvelService";
import ErrorPage from "./ErrorPage";
import Spinner from "./Spinner";
import useDidMountEffect from "../hooks/didMount";

interface ChosenCharacterProps {
    id: number
}

interface ChosenCharacterState {
    char: ICharItem,
    loading: boolean,
    error: boolean
}

const ChosenCharacter = (props:ChosenCharacterProps) => {
    const [char, setChar] = useState({} as ICharItem)


    const {getCharacter, loading, error} = useMarvelService()

    const fetchChar = async () => {
        try {
            const char = await getCharacter(props.id)
            setChar(char)
        }
        catch (e) {
        }
    }

    useDidMountEffect(fetchChar, [props.id])


    const ViewChar = (props: Pick<ChosenCharacterState, 'char'>) => {
        const {name, urls, thumbnail, comics, description} = props.char
        const thumbNailClasses = char.thumbnail.path.endsWith('available')  ? 'w-full h-full' : 'w-full h-full object-cover'


        return(
            <>
                <div className={'flex flex-grow-0 h-150p'}>
                    <div className={'w-150p h-150p flex-shrink-0'}>
                        <img className={thumbNailClasses} src={`${thumbnail.path}.${thumbnail.extension}`} alt="character pic"/>
                    </div>
                    <div className={'flex flex-col ml-25p h-full'}>
                        <h2 className={'text-header uppercase'}>{name}</h2>
                        <a className={'btn-main mt-auto'} href={urls[1].url}>WIKI</a>
                        <a className={'btn-main mt-2.5'} href={urls[0].url}>HOMEPAGE</a>
                    </div>
                </div>
                <p className={'mt-4 text-p'}>{description}</p>
                <h4 className={'text-header-s mt-2.5'}>Comics:</h4>
                {comics.items.map((item: IComicsItem, index) => {
                    // eslint-disable-next-line
                    if (index >= 15) return
                    return (
                        <a key={item.name} href={item.resourceURI} className={'w-full mt-2.5  hover:scale-105'}>
                            <div className={'w-full py-[3px] px-2.5 text-p shadow-comics-item'}>{item.name}</div>
                        </a>
                    )
                })}
            </>
        )
    }

    const SkeletonView = () => {
        return (
            <>
                <h4 className={'text-header-s text-center'}>Please select a character to see information</h4>
                <div className={'w-full mt-[33px] flex flex-col'}>
                    <div className={'flex items-center'}>
                        <div className={'bg-gray-300 w-10 h-10 rounded-full mr-[9px] flex-shrink-0'}/>
                        <div className={'bg-gray-300 w-full h-4'}/>
                    </div>
                    <div className={'h-35p mt-15p bg-gray-300'}/>
                    <div className={'h-35p mt-15p bg-gray-300'}/>
                    <div className={'h-35p mt-15p bg-gray-300'}/>
                </div>
            </>
        )
    };


    const errorView = error ? <ErrorPage/> : null
    const loadingView = loading ? <Spinner/> : null
    const charView = JSON.stringify(char) !== '{}' && !loading && !error ? <ViewChar char={char}/> : null
    const skeletonView = JSON.stringify(char) === '{}' && !loading && !error ? <SkeletonView/> : null


    return (
        <div className={'p-25p shadow-main w-full flex flex-col self-start'}>
            {skeletonView}
            {errorView}
            {loadingView}
            {charView}
        </div>
    )
}

export default ChosenCharacter
