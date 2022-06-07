const ErrorPage = () => {
    return (
        <div className={'flex flex-col justify-center items-center bg-blue-300/50 w-full h-full rounded py-14 '}>
            <div className={'text-4xl text-red-400'}>Error 404</div>
            <a className={'text-lg text-gray-700 hover:text-blue-700 mt-10'}  href="/">Go home</a>
        </div>
    )
}

export default ErrorPage