import { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import { AiFillQuestionCircle } from 'react-icons/ai'
import {
    Container,
    FormContainer,
    Form,
    InputContainer,
    Input,
    Error,
    GeneralError,
    ButtonsContainer,
    Button,
    TooltipIcon,
    TooltipText
} from './Elements'
import Loader from '../Loader/Loader'

const Login = () => {

    const [type, setType] = useState('signin')
    const [openTooltip, setOpenTooltip] = useState(false)
    const [loading, setLoading] = useState(false)

    const signinSchema = Yup.object({
        email: Yup.string().email('Ingrese un e-mail adecuado').required('Ingrese un e-mail'),
        password: Yup.string().required('Ingrese una contraseña'),
    })
    const signupSchema = Yup.object({
        email: Yup.string().email('Ingrese un correo adecuado').required('Ingrese un correo'),
        password: Yup.string().required('Ingrese una contraseña'),
        api: Yup.string().required('Ingrese clave de API'),
    })
    const yupSchema = type === 'signin' ? signinSchema : signupSchema

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            api: '',
        },
        validationSchema: yupSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            setLoading(true)

            // Testing
            setTimeout(() => {
                resetForm()
                setLoading(false)
            }, 5000)
        }
    })

    // useEffect(() => {
    //     console.log(formik.errors)
    //     formik.errors = {}
    // }, [type])

    const handleClick = () => {
        console.log('hola')
        const t = type === 'signin' ? 'signup' : 'signin'
        setType(t)
    }

    return (
        <Container>
            <FormContainer>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <InputContainer>
                        <Input
                            id="email"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="e-mail"
                            aria-label="email"
                            aria-required="true"
                        />
                        {
                            formik.errors.email &&
                            formik.touched.email &&
                            <Error>{formik.errors.email}</Error>
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="password"
                            type="text"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Contraseña"
                            aria-label="password"
                            aria-required="true"
                        />
                        {
                            formik.errors.password &&
                            formik.touched.password &&
                            <Error>{formik.errors.password}</Error>
                        }
                    </InputContainer>
                    {
                        type === 'signup' ?
                        <InputContainer>
                            <Input
                                id="api"
                                type="text"
                                name="api"
                                value={formik.values.api}
                                onChange={formik.handleChange}
                                placeholder="Clave de API"
                                aria-label="api"
                                aria-required="true"
                            />
                            {
                                formik.errors.api &&
                                formik.touched.api &&
                                <Error>{formik.errors.api}</Error>
                            }
                            <TooltipIcon><AiFillQuestionCircle /></TooltipIcon>
                            <TooltipText>Se encuentra en la caja del producto</TooltipText>
                        </InputContainer>
                        : null
                    }
                    <ButtonsContainer dis={loading}>
                        <Button type="submit" disabled={loading}>
                            <PrimaryButton>
                                {
                                    loading ?
                                    <Loader /> :
                                    type === 'signin' ?
                                    'Ingresar' :
                                    'Registrarse'
                                }
                            </PrimaryButton>
                        </Button>
                        <Button type="button" onClick={handleClick} disabled={loading}>
                            <SecondaryButton>
                                {
                                    type === 'signin' ?
                                        'Registrarse' :
                                        'Tengo una cuenta'
                                }
                            </SecondaryButton>
                        </Button>
                    </ButtonsContainer>
                    <GeneralError></GeneralError>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default Login