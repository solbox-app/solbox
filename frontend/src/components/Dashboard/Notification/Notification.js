import {
    NotificationBanner,
    NotificationText,
    Greeting,
    NotificationSpan,
} from './Elements'


const Notification = () => {
    return (
        <NotificationBanner>
            <NotificationText>
                <Greeting>Hola, nombre de usuario. </Greeting>
                <NotificationSpan>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi pariatur.</NotificationSpan>
            </NotificationText>
        </NotificationBanner>
    )
}

export default Notification