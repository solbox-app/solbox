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
                <NotificationSpan>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</NotificationSpan>
            </NotificationText>
        </NotificationBanner>
    )
}

export default Notification