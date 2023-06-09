import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Loader from '../../Loader/Loader'
import {
    Form,
    InputContainer,
    InputLabel,
    Input,
    Error,
    Button,
    Subtitle,
} from '../Elements'

const Email = () => {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: Yup.object({ email: Yup.string().email('Ingrese un correo adecuado').required('Ingrese un correo') }),
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

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Subtitle>Cambiar correo</Subtitle>
            <InputContainer>
                <InputLabel htmlFor="email">Correo nuevo</InputLabel>
            <Input
                id="email"
                type="email"
                name="email"
                value={formik.values.psw}
                onChange={formik.handleChange}
                aria-label="cambiar correo electronico"
                aria-required="true"
                />
            {
                formik.errors.email &&
                formik.touched.email &&
                <Error>{formik.errors.email}</Error>
            }
            </InputContainer>
            <Button type="submit" disabled={loading}>
                <PrimaryButton>{loading ? <Loader /> : "Cambiar contraseña"}</PrimaryButton>
            </Button>
        </Form>
    )
}

export default Email