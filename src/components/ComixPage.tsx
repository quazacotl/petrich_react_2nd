const ComixPage = () => {
    return (
        <div className={'flex'}>
            <div className={'h-[450px] w-[293px] bg-gray-300'}>
                <img className={'w-full h-full object-cover'} src="#" alt="comix-art"/>
            </div>
            <div className="flex flex-col ml-[50px]">
                <div className="flex justify-between">
                    <h3 className={'text-header'}>Comix name</h3>
                    <a className={'text-header-s'} href="/comixes">Back to all</a>
                </div>
                <p className="text-p w-[550px] mt-25p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut autem deleniti dignissimos distinctio eligendi ex inventore iure libero modi nemo, officiis omnis porro possimus quam sapiente sequi vero voluptate!</p>
                <p className={'text-p mt-25p'}>Number of pages</p>
                <p className={'text-p mt-25p'}>Language: {}</p>
                <div className={'text-rnd-card text-color-main mt-25p'}>Price</div>
            </div>
        </div>
    )
}
 export default ComixPage
