import RandomCharacter from "../RandomCharacter";
import Characters from "../Characters";
import ChosenCharacter from "../ChosenCharacter";
import FindForm from "../FindForm";
import React, {useState} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {Helmet} from "react-helmet"

const MainPage = () => {
    const [currentId, setCurrentId] = useState(NaN)

    const setId = (id: number): void => {
        setCurrentId(id)
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel React</title>
            </Helmet>
            <RandomCharacter/>
            <div className={'flex mt-12'}>
                <Characters setId={setId}/>
                <div className="flex flex-col ml-25p w-[425px]">
                    <ErrorBoundary>
                        <ChosenCharacter id={currentId}/>
                    </ErrorBoundary>
                    <FindForm/>
                </div>
            </div>
        </>
    )
};

export default MainPage