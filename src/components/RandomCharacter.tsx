import {Component} from "react";
import MarvelService from "../services/MarvelService";
import {INarrowChar} from "../interfaces/interfaces";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";

interface RandomCharacterState {
    char: Omit<INarrowChar, 'id'>,
    loading: boolean,
    error: boolean
}

class RandomCharacter extends Component<any, RandomCharacterState>  {
    state = {
        char: {
            name: '',
            description: '',
            thumbnail: '',
            homepage: '',
            wiki: ''
        },
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    updateChar = async (): Promise<any> => {
        this.setState({loading: true});
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        try {
            const res = await this.marvelService.getCharacter(id);
            const char = this.marvelService._transformChar(res);
            this.setState({char});
            this.setState({loading: false});
        } catch (e) {
            this.setState({loading: false});
            this.setState({error: true})
        }
    }

    componentDidMount() {
        this.updateChar()
    }

    render() {
        const {char, loading, error} = this.state
        const thumbNailClasses = char.thumbnail.endsWith('available.jpg')  ? 'w-full h-full' : 'w-full h-full object-cover'

        const ViewChar = (props: any) => {
            const char = props.char
            return (
                <>
                    <div className={'w-180p h-180p bg-gray-300 flex-shrink-0'}>
                        <img className={thumbNailClasses} src={char.thumbnail} alt="character pic"/>
                    </div>
                    <div className={'flex flex-col ml-30p overflow-visible'}>
                        <h3 className={'text-header uppercase single-clamp w-72'}>{char.name}</h3>
                        <p className={'text-p my-13p flex-grow line-clamp'}>{char.description}</p>
                        <div className={'flex h-38p flex-shrink-0 overflow-visible'}>
                            <a className={'btn-main'} href={char.homepage}>HOMEPAGE</a>
                            <a className={'btn-gray ml-30p'} href={char.wiki}>WIKI</a>
                        </div>
                    </div>
                </>
            )
        }

        const errorMessage = error ? <ErrorPage/> : null
        const spinner = loading ? <Spinner/> : null
        const view = !(errorMessage || spinner) ? <ViewChar char={char}/> : null


        return (
            <div className={'flex'}>
                <div className={'w-1/2 h-250p p-35p pl-10 shadow-main flex'}>
                    {errorMessage}
                    {spinner}
                    {view}
                </div>
                <div className={'w-1/2 h-250p p-35p pl-10 shadow-main bg-gray-900 bg-thor bg-thor-pos bg-no-repeat flex flex-col justify-between'}>
                    <div className={'text-rnd-card'}>Random character for today!<br/>
                        Do you want to get to know him better?</div>
                    <div className={'text-rnd-card flex-grow mt-8'}>Or choose another one</div>
                    <button className={'btn-main hover:-translate-y-2'} onClick={this.updateChar}>TRY IT</button>
                </div>
            </div>
        )
    }

}

export default RandomCharacter
