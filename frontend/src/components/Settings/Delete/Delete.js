import TertiaryButton from '../../Buttons/TertiaryButton'
import {
    Container,
    Text,
    Button,
} from './Elements'

const Delete = () => {

    const handleDelete = () => {
        //LOGIC TO DELETE USER
    }

    return (
        <Container>
            <Text>Mensaje sobre resultados. ej. "Al borrar la cuenta se eliminaran de forma irreversible los datos asociados, etc."</Text>
            <Button onClick={handleDelete}>
                <TertiaryButton>Borrar</TertiaryButton>
            </Button>
        </Container>
    )
}

export default Delete