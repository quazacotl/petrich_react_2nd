import ComixBanner from "../ComixBanner";
import Spinner from "../Spinner";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICharItem} from "../../interfaces/interfaces";
import useMarvelService from "../../services/MarvelService";


const SingleHeroPage = () => {
    const {getCharacterByName} = useMarvelService()
    const params = useParams  ()
    const [char, setChar] = useState<ICharItem | null>(null)

    const getCharacter = async (name: string) => {
        const res = await getCharacterByName(name)
        setChar(res)
    }


    useEffect(() => {
        if (params.name) getCharacter(params.name)
        console.log(char)
        return setChar(null)

    }, [])

    interface CharViewProps {
        char: ICharItem
    }

    const CharView = (props: CharViewProps) => {
        const {thumbnail, description, name} = props.char
        return (
            <div className={'flex'}>
                <div className={'h-[293px] w-[293px] bg-gray-300'}>
                    <img className={'w-full h-full object-cover'} src={thumbnail.path + '.' + thumbnail.extension} alt={'char'}/>
                </div>
                <div className="flex flex-col ml-[50px]">
                    <h3 className={'text-header'}>{name}</h3>
                    <p className="text-p w-[550px] mt-25p">{description}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <ComixBanner/>
            {char? <CharView char={char}/> : <Spinner/>}
        </>
    );
};

export default SingleHeroPage;