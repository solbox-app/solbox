import { Container, Title } from './Elements'
import Email from './Email/Email'
import Password from './Password/Password'
import Api from './Api/Api'
import Delete from './Delete/Delete'

const Settings = () => {

    //TODO> USE NOTIFICATION COMPONENT TO NOTIFY USER IF SOME CONFIG CHANGED

    return (
        <Container>
            <Title>Configuracion de la cuenta</Title>
            <Password />
            <Email />
            <Api />
            <Title>Borrar cuenta</Title>
            <Delete />
        </Container>
    )
}

export default Settings