import React from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().min(6, "Password must be atleast 8 characters")
})

const SignUp = () => {

    const initialValues = { email: "", username: "", name: "", password: "" };

    const handleSubmit = (values) => {
        console.log("values: ", values);
    }

    return (
        <div>
            {/* <input className="logipage__text" onChange={(event) => { this.state.emailId = event.currentTarget.value; }} type="text" placeholder="Mobile number or Email" />
            <input className="logipage__text" onChange={(event) => { this.state.name = event.currentTarget.value; }} type="text" placeholder="Full Name" />
            <input className="logipage__text" onChange={(event) => { this.state.userName = event.currentTarget.value; }} type="text" placeholder="Username" />
            <input className="logipage__text" onChange={(event) => { this.state.password = event.currentTarget.value; }} type="password" placeholder="Password" />
            <button className="login__button" onClick={this.newSignUp} >Sign up</button> */}

            <div>
                <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) =>
                            <Form className='space-y-2'>
                                {/* Name */}
                                <Field name="name" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input className='w-full' {...field} id="name" placeholder="Full Name" required />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                {/* Username */}
                                <Field name="username" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.username && form.touched.username}>
                                        <Input className='w-full' {...field} id="username" placeholder="Username" required />
                                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                {/* Email */}
                                <Field name="email" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <Input className='w-full' {...field} id="email" placeholder="Email or Mobile Number" required />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>}
                                </Field>
                                {/* Password */}
                                <Field name="password" >
                                    {({ field, form }) => <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <Input className='w-full' {...field} id="password" placeholder="Password" required />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>}
                                </Field>

                                <Button className='w-full' mt={4} colorScheme={'blue'} type={'submit'} isLoading={formikProps.isSubmitting} >
                                    Sign Up
                                </Button>
                            </Form>}

                    </Formik>
                </Box>
            </div>
        </div>
    );
}

export default SignUp