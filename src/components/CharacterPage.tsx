const CharacterPage = () => {
    return (
        <div className={'flex'}>
            <div className={'h-[293px] w-[293px] bg-gray-300'}>
                <img className={'w-full h-full object-cover'} src="#" alt="comix-art"/>
            </div>
            <div className="flex flex-col ml-[50px]">
                <h3 className={'text-header'}>Char name</h3>
                <p className="text-p w-[550px] mt-25p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut autem deleniti dignissimos distinctio eligendi ex inventore iure libero modi nemo, officiis omnis porro possimus quam sapiente sequi vero voluptate!</p>
            </div>
        </div>
    )
}

export default CharacterPage
