const ErrorPage = () => {
    return (
        <div className={'flex flex-col justify-center items-center bg-blue-600 w-full h-full '}>
            <div className={'text-3xl text-white'}>Error 404</div>
            <a className={'text-lg text-white hover:text-gray-600'}  href="/">Go home</a>
        </div>
    )
}

export default ErrorPage