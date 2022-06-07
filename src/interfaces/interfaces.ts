export interface ICharItem {
    comics: IComicses
    description: string
    events: IEvents
    id: number
    modified: string
    name: string
    resourceURI: string
    series: ISeries
    stories: IStories
    thumbnail: IThumbnail
    urls: IUrl[]
}

export interface INarrowChar {
    id: number,
    name: string,
    description: string,
    thumbnail: string,
    homepage: string,
    wiki: string
}

interface IComicses {
    available: number,
    collectionURI: string,
    items: IComicsItem[],
    returned: number
}

export interface IComicsItem {
    name: string,
    resourceURI: string
}

interface IEvents extends IComicses {
    items: IEventItem[]
   }

interface IEventItem extends  IComicsItem {}

interface ISeries {
    items: ISeriesItem[]
}

interface ISeriesItem extends  IComicsItem {}

interface IStories {
    items: IStoriesItem[]
}

interface IStoriesItem extends  IComicsItem {
    type: string
}

interface IThumbnail {
    extension: string
    path: string
}

interface IUrl {
    type: string
    url: string
}

export interface Comix {
    id: number,
    title: string,
    price: string,
    thumbnail: string
}

export interface SingleComic extends Comix {
    description: string
    pageCount: string
    language: string
}

