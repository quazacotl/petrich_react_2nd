import {ICharItem, INarrowChar, SingleComic} from "../interfaces/interfaces";
import {useHttpHooks} from "../hooks/usehttp.hooks";
import {Comix} from "../interfaces/interfaces";

const useMarvelService = () => {
    const {loading, error, request, clearError} = useHttpHooks()

    const _apiBase: string = 'https://gateway.marvel.com:443/v1/public/'
    const _apiKey: string = 'apikey=fbf8fdd906438a3eae9ccc474039212b'
    const _offset: string = '310'


    const getAllCharacters = async (offset: string = _offset): Promise<ICharItem[]> => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results as Promise<ICharItem[]>
    }

    const getCharacter = async (id: number): Promise<ICharItem> => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=fbf8fdd906438a3eae9ccc474039212b`)
        return res.data.results[0] as Promise<ICharItem>
    }

    const getCharacterByName = async (name: string): Promise<ICharItem> => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=fbf8fdd906438a3eae9ccc474039212b`)
        return res.data.results[0] as Promise<ICharItem>
    }

    const getComic = async (id: string): Promise<SingleComic> => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const getAllComixes = async (offset: number): Promise<Comix[]> => {
        const response = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
        const results = response.data.results
        const comixes = [] as Comix[]
        results.forEach((comix:any) => {
            comixes.push({
                id: comix.id,
                title: comix.title,
                price: comix.prices[0].price,
                thumbnail: `${comix.thumbnail.path}.${comix.thumbnail.extension}`
            })
        })
        return comixes
    }

    const _transformChar = (charItem: ICharItem): INarrowChar => {
        return ({
            id: charItem.id,
            name: charItem.name,
            description: charItem.description ? charItem.description : 'No detailed information',
            thumbnail: `${charItem.thumbnail.path}.${charItem.thumbnail.extension}`,
            homepage: charItem.urls[0].url,
            wiki: charItem.urls[1].url
        })
    }

    const _transformComics = (comics: any): SingleComic => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
        }
    }

    return {loading, error, getAllCharacters, getCharacterByName, getCharacter, _transformChar, clearError, getAllComixes, getComic}
}

export default useMarvelService
