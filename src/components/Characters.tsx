import CharacterCard from './CharacterCard'
import {Component} from "react";
import MarvelService from "../services/MarvelService";
import {INarrowChar} from "../interfaces/interfaces";
import Spinner from "./Spinner";

interface CharactersState {
    persons: INarrowChar[],
    loading: boolean,
    charOffset: number,
    btnLoading: boolean
}

interface CharactersProps {
    setId: (id: number) => void
}

class Characters extends Component<CharactersProps, CharactersState>{
    state = {
        persons: [],
        loading: true,
        charOffset: 310,
        btnLoading: false
    }

    marvelService = new MarvelService()

    updateCharacters = async (offset: number): Promise<void> => {
        this.setState({btnLoading: true})
        const res = await this.marvelService.getAllCharacters(String(offset))
        const persons: INarrowChar[] = []
        res.forEach(item => persons.push(this.marvelService._transformChar(item)))
        this.setState({persons: [...this.state.persons, ...persons]})
        this.setState({loading: false})
        this.setState(({charOffset}) => ({
            charOffset: charOffset + 9
        }))
        this.setState({btnLoading: false})
    }

    componentDidMount() {
        this.updateCharacters(this.state.charOffset)
    }

    render() {
        return (
            <div className={'flex flex-wrap gap-x-25p gap-y-30p w-[650px] justify-center'}>
                {this.state.loading ?
                    <Spinner/> :
                    <>
                        {this.state.persons.map((item: INarrowChar) => {
                            return (
                                <CharacterCard
                                    key={item.id}
                                    char={item}
                                    setId={this.props.setId}
                                />
                                )

                            }
                        )}
                        <button
                            onClick={() => this.updateCharacters(this.state.charOffset)}
                            className={'btn-main mt-4 mx-auto disabled:bg-gray-400'}
                            disabled={this.state.btnLoading}
                        >LOAD MORE</button>
                    </>
                   }
            </div>
        )
    }

}

export default Characters
