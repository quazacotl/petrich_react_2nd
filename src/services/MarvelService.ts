import {ICharItem, INarrowChar} from "../interfaces/interfaces";

class MarvelService {

    readonly _apiBase: string = 'https://gateway.marvel.com:443/v1/public/'
    readonly _apiKey: string = 'apikey=fbf8fdd906438a3eae9ccc474039212b'
    readonly _offset: string = '310'

    getResourse  = async (url: string): Promise<any>  => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}` )
        }
        return await res.json()
    }

    getAllCharacters = async (offset: string = this._offset): Promise<ICharItem[]> => {
        const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`)
        return res.data.results as Promise<ICharItem[]>
    }

    getCharacter = async (id: number): Promise<ICharItem> => {
        const res = await this.getResourse(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=fbf8fdd906438a3eae9ccc474039212b`)
        return res.data.results[0] as Promise<ICharItem>
    }

    _transformChar = (charItem: ICharItem): INarrowChar => {
        return ({
            id: charItem.id,
            name: charItem.name,
            description: charItem.description ? charItem.description : 'No detailed information',
            thumbnail: `${charItem.thumbnail.path}.${charItem.thumbnail.extension}`,
            homepage: charItem.urls[0].url,
            wiki: charItem.urls[1].url
        })
    }
}

export default MarvelService
