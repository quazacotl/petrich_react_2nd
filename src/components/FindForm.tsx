const FindForm = () => {
    return (
        <div className={'shadow-main w-full mt-30p p-25p flex flex-col justify-between'}>
            <h4 className={'text-header-s'}>Or find a character by name:</h4>
            <div className="flex justify-between mt-[18px]">
                <input type="text" name={'find-char'} className={'w-[250px] h-38p px-2 shadow-comics-item outline-none placeholder-fsz'} placeholder={'Enter name'}/>
                <button className={'btn-main bg-main'}>FIND</button>
            </div>
        </div>
    )
}

export default FindForm
