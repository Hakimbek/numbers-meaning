import * as Yup from 'yup';

export const validationSchema = Yup.object({
    number: Yup.number()
        .typeError('Must be a number')
        .required('Required')
        .min(0, 'Must be a positive number')
        .integer('Must be an integer'),
    type: Yup.string()
        .typeError('Must be an string')
        .required('Required'),
});
