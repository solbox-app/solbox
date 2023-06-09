import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Loader from '../../Loader/Loader'
import { BiHide, BiShow } from 'react-icons/bi'
import {
    Form,
    InputContainer,
    InputLabel,
    Input,
    Error,
    RevealIcon,
    Button,
    GeneralError,
    Subtitle,
} from '../Elements'

const Password = () => {

    const [revealed, setRevealed] = useState({
        psw: false,
        confirmed: false,
    })
    const [loading, setLoading] = useState(false)
    const [generalError, setGeneralError] = useState('')

    const formik = useFormik({
        initialValues: {
            psw: '',
            confirmed: '',
        },
        validationSchema: Yup.object({
            psw: Yup.string().required('Ingrese una contraseña'),
            confirmed: Yup.string().required('Repita la contraseña'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            setLoading(true)

            if (values.psw === values.confirmed) {

                //CALL PSW CHANGE, when fullfilled..
                //RESET FORM
                resetForm()
                //SET NOTIFICATION 

                //SET LOADING TO FALSE
                // setLoading(false)
            } else {
    
                setGeneralError('Las contraseñas no coinciden')
                setLoading(false)
                resetForm()
            }

            // Testing
            // setTimeout(() => {
            //     resetForm()
            //     setLoading(false)
            // }, 5000)
        }
    })

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Subtitle>Cambiar contraseña</Subtitle>
            <InputContainer>
                <InputLabel htmlFor='psw'>Contraseña nueva</InputLabel>
                <Input
                    id="psw"
                    type={revealed.psw ? "text" : "password"}
                    name="psw"
                    value={formik.values.psw}
                    onChange={formik.handleChange}
                    aria-label="change password"
                    aria-required="true"
                />
                {
                    formik.errors.psw &&
                    formik.touched.psw &&
                    <Error>{formik.errors.psw}</Error>
                }
                <RevealIcon 
                    onClick={() => setRevealed({ ...revealed, psw: !revealed.psw })}
                >
                    {
                        revealed.psw ? <BiHide /> : <BiShow /> 
                    }
                </RevealIcon>
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='confirmed'>Repetir contraseña</InputLabel>
                <Input
                    id="confirmed"
                    type={revealed.confirmed ? "text" : "password"}
                    name="confirmed"
                    value={formik.values.confirmed}
                    onChange={formik.handleChange}
                    aria-label="cambiar password"
                    aria-required="true"
                />
                {
                    formik.errors.confirmed &&
                    formik.touched.confirmed &&
                    <Error>{formik.errors.confirmed}</Error>
                }
                <RevealIcon 
                    onClick={() => setRevealed({ ...revealed, confirmed: !revealed.confirmed })}
                >
                    {
                        revealed.confirmed ? <BiHide /> : <BiShow />
                    }
                </RevealIcon>
            </InputContainer>
            <Button type="submit" disabled={loading}>
                <PrimaryButton>{ loading ? <Loader /> : "Cambiar contraseña" }</PrimaryButton>
            </Button>
            {
                generalError.length !== 0 ? <GeneralError>{generalError}</GeneralError> : null
            }
        </Form>
    )
}

export default Password