import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from 'yup'
import useMarvelService from "../services/MarvelService";
import {useState} from "react";
import {ICharItem} from "../interfaces/interfaces";
import {Link} from "react-router-dom";

interface Values {
    findchar: string;
}

interface FoundCharacterProps {
    name: string;
}

const FoundCharacter = (props: FoundCharacterProps) => {
    return (
        <div className={'flex justify-between items-center mt-15p'}>
            <div className={'text-green-500 text-header-s'}>There is! Visit {props.name} page?</div>
            <Link to={`/${props.name}`} className={'btn-gray'}>TO PAGE</Link>
        </div>
    )
}

const FindForm = () => {
    const {getCharacterByName} = useMarvelService()
    const [char, setChar] = useState<ICharItem | null>(null)
    const [touched, setTouched] = useState(false)

    const handleSubmit = async (value: string) => {
        const res = await getCharacterByName(value)
        setTouched(true)
        if (res) setChar(res)
    }

    return (
        <Formik
            initialValues={{findchar: ''}}
            onSubmit={(values: Values) => {
                handleSubmit(values.findchar)
            }}
            validationSchema={yup.object({
                findchar: yup.string().required('This field is required'),
            })}
        >
            <Form className={'shadow-main w-full mt-30p p-25p flex flex-col justify-between'}>
                <h4 className={'text-header-s'}>Or find a character by name:</h4>
                <div className="flex justify-between mt-[18px]">
                    <Field name={'findchar'} className={'w-[250px] h-38p px-2 shadow-comics-item outline-none placeholder-fsz'} placeholder={'Enter name'}/>
                    <button type={'submit'} className={'btn-main bg-main'}>FIND</button>
                </div>
                <ErrorMessage className={'text-red-800 text-header-s mt-22p'} name={'findchar'} component={'div'}/>
                {char ? <FoundCharacter name={char.name}/> : null}
                {!char && touched ? <div className={'text-red-800 text-header-s mt-22p'}>The character was not found. Check the name and try again</div> : null}
            </Form>
        </Formik>
    )
}

export default FindForm
