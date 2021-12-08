const ComixCard = () => {
    return (
        <div className={'w-[225px]'}>
            <div className={'w-[225px] h-[246px] bg-gray-300'}>
                <img className={'w-full h-full object-cover'} src="#" alt="comix-art"/>
            </div>
            <div className={'text-comix-name mt-2.5'}>Comix name</div>
            <div className={'text-comix-name text-gray-400 mt-2'}>Comix price</div>
        </div>
    )
}

export default ComixCard
