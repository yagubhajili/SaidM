import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .integer()
        .positive()
        .min(0, 'Cant be minus number!')
        .max(100, 'Too much!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const Register = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                age: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className='holder'>
                        <div>
                            <label htmlFor="Name">Name</label>
                            <Field name="firstName" />
                            {errors.firstName && touched.firstName ? (
                                <div className='error'>{errors.firstName}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="age">age</label>
                            <Field name="age" />

                            {errors.age && touched.age ? (
                                <div className='error'>{errors.age}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="mail">mail</label>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);