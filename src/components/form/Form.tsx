import Select from '../select/Select.tsx';
import { NUMBER_TYPES } from '../../const/const.ts';
import { useFormik } from 'formik';
import { validationSchema } from './validation.ts';
import { requestNumberMeaning } from '../../util/requestNumberMeaning.ts';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Form.css';

interface FormValues {
    number: string;
    type: string;
}

const Form = () => {
    const [_, setMeaning] = useLocalStorage('meaning', '');
    const navigate = useNavigate();
    const {
        isValid,
        dirty,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        touched,
        errors,
        handleSubmit
    } = useFormik<FormValues>({
        initialValues: { number: '',  type: NUMBER_TYPES[0] },
        validationSchema,
        onSubmit: async (values) => {
            const meaning = await requestNumberMeaning(values.number, values.type);
            setMeaning(meaning)
            navigate('/meaning');
        },
    });

    return (
        <form onSubmit={handleSubmit} className='form-wrapper'>
            <div>
                <label htmlFor="number" className='form-label'>Enter a number</label>
                <input
                    id='number'
                    name='number'
                    type='text'
                    placeholder='Type here'
                    className='form-control'
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.number && errors.number && (
                    <div style={{ color: 'red' }}>{errors.number}</div>
                )}
            </div>
            <Select
                options={NUMBER_TYPES}
                selectedValue={values.type}
                onChange={(value) => setFieldValue('type', value)}
                label='Choose type'
            />
            <button type='submit' disabled={!isValid || !dirty} className='btn btn-dark'>Search</button>
        </form>
    )
}

export default Form;
