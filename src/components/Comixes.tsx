import ComixCard from './ComixCard'
import {useEffect, useState} from "react";
import useMarvelService from "../services/MarvelService";
import {Comix} from "../interfaces/interfaces";
import Spinner from "./Spinner";


const Comixes = () => {
    const [comixes, setComixes] = useState<Comix[]>([] as Comix[])
    const [btnLoading, setBtnLoading] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [comixOffset, setComixOffset] = useState(95)

    const {loading, getAllComixes} = useMarvelService()

    const updateComixes = async (offset:number, initial:boolean = false): Promise<void> => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        setBtnLoading(true)
        const res = await getAllComixes(comixOffset)
        const tempComixes:Comix[] = []
        res.forEach((item) => tempComixes.push(item))
        setComixes([...comixes, ...tempComixes])
        setComixOffset((comixOffset) => comixOffset + 8)
        setBtnLoading(false)
    }

    useEffect(() => {
        updateComixes(comixOffset, true)
    }, [])


    return (
        <>
            <div className={'flex flex-wrap justify-between gap-y-[55px]'}>
                {loading && !newItemLoading ?
                    <Spinner/> :
                    <>
                        {comixes.map((item: Comix) => {
                                return (
                                    <ComixCard
                                        key={item.id}
                                        comix={item}
                                    />
                                )
                            }
                        )}

                    </>
                }
            </div>
            <button
                onClick={() => updateComixes(comixOffset)}
                className={'btn-main mt-4 mx-auto disabled:bg-gray-400 disabled:bg-none'}
                disabled={btnLoading}
            >LOAD MORE</button>
        </>
    )
}

export default Comixes
