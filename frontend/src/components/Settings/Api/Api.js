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
    GeneralError,
    Subtitle,
} from '../Elements'

const Api = () => {

    const [loading, setLoading] = useState(false)
    const [generalError, setGeneralError] = useState('')

    const formik = useFormik({
        initialValues: { api: '' },
        validationSchema: Yup.object({ api: Yup.string().required('Ingrese una clave de API')}),
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            setLoading(true)

            //IF API KEY DOESNT RECEIVE CORRECT RESONSE FROM SOLARMAN SET ERROR
            // if(-) {
            //     //SET ERROR
            //     setGeneralError('error code and identifier')
            // } else {
            //     //SET NEW KEY
            // }

            // Testing
            setTimeout(() => {
                resetForm()
                setLoading(false)
            }, 5000)
        }
    })

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Subtitle>Cambiar clave de API</Subtitle>
            <InputContainer>
                <InputLabel htmlFor="api">Nueva clave de API</InputLabel>
                <Input 
                    id="api"
                    type="text"
                    name="api"
                    value={formik.values.api}
                    onChange={formik.handleChange}
                    aria-label="cambiar clave de api"
                    aria-required="true"
                />
                {
                    formik.errors.api &&
                    formik.touched.api &&
                    <Error>{formik.errors.api}</Error>
                }
            </InputContainer>
            <Button type="submit" disabled={loading}>
                <PrimaryButton>{loading ? <Loader /> : "Cambiar clave"}</PrimaryButton>
            </Button>
            {
                generalError.length !== 0 ? <GeneralError>{generalError}</GeneralError> : null
            }
        </Form>
    )
}

export default Api