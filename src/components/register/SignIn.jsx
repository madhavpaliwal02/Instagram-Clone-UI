import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().min(8, "Password must be atleast 8 characters")
})

const SignIn = () => {

    const initialValues = { email: "", password: "" };

    const handleSubmit = (values) => {
        console.log("values: ", values);
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
                                    <Input className='w-full' {...field} id="password" placeholder="Password" required />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>}
                            </Field>

                            <Button className='w-full' mt={4} colorScheme={'blue'} type={'submit'} isLoading={formikProps.isSubmitting} >
                                Sign In
                            </Button>
                        </Form>}

                    </Formik>
                </Box>
            </div>

        </div>
    )
}

export default SignIn