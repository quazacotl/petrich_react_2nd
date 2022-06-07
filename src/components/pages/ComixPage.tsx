import Comixes from "../Comixes";
import ComixBanner from "../ComixBanner";
import React from "react";
import {Helmet} from "react-helmet";

const ComixPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with comix list"
                />
                <title>Comix page</title>
            </Helmet>
            <ComixBanner/>
            <Comixes/>
        </>
    )
};

export default ComixPage