import CharacterCard from './CharacterCard'
import {useEffect, useState} from "react";
import {INarrowChar} from "../interfaces/interfaces";
import Spinner from "./Spinner";
import useMarvelService from "../services/MarvelService";

interface CharactersProps {
    setId: (id: number) => void
}

const Characters = (props:CharactersProps) => {
    const [persons, setPersons] = useState([] as INarrowChar[])
    const [btnLoading, setBtnLoading] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [charOffset, setCharOffset] = useState(310)


    const {loading, getAllCharacters, _transformChar} = useMarvelService()

    const updateCharacters = async (offset:number, initial:boolean = false): Promise<void> => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        setBtnLoading(true)
        const res = await getAllCharacters(String(offset))
        const gotPersons: INarrowChar[] = []
        res.forEach(item => gotPersons.push(_transformChar(item)))
        setPersons([...persons, ...gotPersons])
        setCharOffset((charOffset) => charOffset + 9)
        setBtnLoading(false)
    }


    useEffect(() => {
        updateCharacters(charOffset, true)
    }, [])


    return (
        <div className={'flex flex-wrap gap-x-25p gap-y-30p w-[650px] justify-center'}>
            {loading && !newItemLoading ?
                <Spinner/> :
                <>
                    {persons.map((item: INarrowChar) => {
                        return (
                            <CharacterCard
                                key={item.id}
                                char={item}
                                setId={props.setId}
                            />
                            )
                        }
                    )}
                    <button
                        onClick={() => updateCharacters(charOffset)}
                        className={'btn-main mt-4 mx-auto disabled:bg-gray-400 disabled:bg-none'}
                        disabled={btnLoading}
                    >LOAD MORE</button>
                </>
               }
        </div>
    )
}

export default Characters
