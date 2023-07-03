import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { signinAction } from '../../redux/auth/Action'


const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().min(6, "Password must be atleast 6 characters")
})

const SignIn = () => {

    const initialValues = { email: "", password: "" };

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log("values: ", values)
        dispatch(signinAction(values))
        actions.setSubmitting(false)
    }


    return (
        <div>
            {/* <input className="logipage__text" onChange={(event) => { this.state.emailId = event.currentTarget.value }} type="text" placeholder="Phone number, username, or email" />
            <input className="logipage__text" onChange={(event) => { this.state.password = event.currentTarget.value }} type="password" placeholder="Password" />
            <button className="login__button" onClick={this.login}>Log In</button> */}

            <div>
                <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) =>
                            <Form className='space-y-6'>
                                <Field name="email" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <Input className='w-full' {...field} id="email" placeholder="Email or Mobile Number" required />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                <Field name="password" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <Input className='w-full' {...field} id="password" type="password" placeholder="Password" required />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                <Button className='w-full' mt={4} colorScheme={'blue'} type={'submit'} isLoading={formikProps.isSubmitting} >
                                    Sign In
                                </Button>
                            </Form>
                        }
                    </Formik>
                </Box>
            </div>

        </div>
    )
}

export default SignIn