import ComixCard from './ComixCard'

const Comixes = () => {
    return (
        <>
            <div className={'flex flex-wrap justify-between gap-y-[55px]'}>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
                <ComixCard/>
            </div>
            <button className={'h-38p w-101p text-white text-p bg-main clip-btn flex justify-center items-center mt-11 mx-auto'}>LOAD MORE</button>
        </>
    )
}

export default Comixes
