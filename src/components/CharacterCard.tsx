import {INarrowChar} from "../interfaces/interfaces";

interface CharacterCardProps {
    char: INarrowChar,
    setId: (id: number) => void
}


const CharacterCard = (props: CharacterCardProps) => {
    const char = props.char
    const thumbNailClasses = char.thumbnail.endsWith('available.jpg')  ? 'w-full h-full' : 'w-full h-full object-cover'

    return (
        <div
            tabIndex={0}
            onClick={()=> props.setId(char.id)}
            onKeyPress={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    props.setId(char.id)
                }
            }}
            className={'flex flex-col bg-gray-700 w-[200px] h-[318px] cursor-pointer focus:drop-shadow-card focus:-translate-y-4 transition duration-300 ease-in-out'}
        >
            <div className={'w-full h-200p bg-gray-300'}>
                <img className={thumbNailClasses} src={char.thumbnail} alt="character pic"/>
            </div>
            <h3 className={'text-ch-name mt-15p ml-15p uppercase '}>{char.name}</h3>
        </div>
    )
}

export default CharacterCard
