import {useParams, Link} from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import React, {useEffect, useState} from "react";
import {SingleComic} from "../../interfaces/interfaces";
import ErrorPage from "../ErrorPage";
import Spinner from "../Spinner";
import ComixBanner from "../ComixBanner";
import {Helmet} from "react-helmet";

const SingleComixPage = () => {
    const {comicId} = useParams()
    const [comic, setComic] = useState<SingleComic | null>(null)
    const {loading, error, getComic, clearError} = useMarvelService()

    useEffect(() => {
        clearError()
        if (comicId) {
            getComic(comicId).then(data => setComic(data))
        }
    }, [comicId])


    interface ViewProps {
        comic: SingleComic
    }

    const View = (props: ViewProps) => {
        const {title, pageCount, language, price, thumbnail, description} = props.comic
        return (
            <>
                <Helmet>
                    <meta
                        name="description"
                        content={`${title} comic book`}
                    />
                    <title>{title}</title>
                </Helmet>
                <ComixBanner/>
                <div className={'flex'}>
                    <div className={'h-[450px] w-[293px] bg-gray-300'}>
                        <img className={'w-full h-full object-cover'} src={thumbnail} alt={title}/>
                    </div>
                    <div className="flex flex-col ml-[50px]">
                        <div className="flex justify-between">
                            <h3 className={'text-header'}>{title}</h3>
                            <Link className={'text-header-s'} to="/comics">Back to all</Link>
                        </div>
                        <p className="text-p w-[550px] mt-25p">{description}</p>
                        <p className={'text-p mt-25p'}>Number of pages: {pageCount}</p>
                        <p className={'text-p mt-25p'}>Language: {language}</p>
                        <div className={'text-rnd-card text-color-main mt-25p'}>{price}</div>
                    </div>
                </div>
            </>

        )
    }

    const errorView = error ? <ErrorPage/> : null
    const loadingView = loading ? <Spinner/> : null
    const charView = !(loading || error || !comic) ? <View comic={comic}/> : null

    return (
        <>
            {errorView}
            {loadingView}
            {charView}
        </>
    )
}
 export default SingleComixPage
