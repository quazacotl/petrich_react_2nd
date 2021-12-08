import React, {Component} from 'react';
import Header from "./components/Header";
import RandomCharacter from "./components/RandomCharacter";
import Characters from "./components/Characters";
import ChosenCharacter from "./components/ChosenCharacter";
import FindForm from "./components/FindForm";
import ComixBanner from "./components/ComixBanner";
import Comixes from "./components/Comixes";
import ComixPage from "./components/ComixPage";
import CharacterPage from "./components/CharacterPage";
import ErrorBoundary from "./components/ErrorBoundary";


interface AppState {
    currentId: number
}

class App  extends Component<any, AppState>{
    state = {
        currentId: NaN
    }

    setId = (id: number): void => {
        this.setState({currentId: id})
    }


    render() {

        return (
            <div className="w-[1100px] mx-auto">
                <Header/>
                <RandomCharacter/>
                <div className={'flex mt-12'}>
                    <Characters setId={this.setId}/>
                    <div className="flex flex-col ml-25p w-[425px]">
                        <ErrorBoundary>
                            <ChosenCharacter id={this.state.currentId}/>
                        </ErrorBoundary>
                        <FindForm/>
                    </div>
                </div>
                {/*<ComixBanner/>*/}
                {/*<Comixes/>*/}
                {/*<ComixPage/>*/}
                {/*<CharacterPage/>*/}
            </div>
        );
    }

}

export default App;
