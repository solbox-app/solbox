import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import {
    Container,
} from './Elements'

const Map = () => {

    const center = { lat: -39.08138204478938, lng: -65.37365285633658 }

    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
    })

    const mapStyle = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#00b7bd"
                }
            ]
        }
    ]


    const markers = [
        center,
        { lat: -41.120442741470406, lng: -71.3861747452465 },
        { lat: -40.19539825321852, lng: -62.26427818765798 },
        { lat: -41.32539822121852, lng: -66.26427818975798 },
        { lat: -38.19539825612852, lng: -67.26237890775798 },
        { lat: -39.19239825621852, lng: -60.26427128775798 },
    ]

    return (
        <Container>
            {
                isLoaded ?
                    <GoogleMap
                        zoom={4}
                        center={center}
                        // mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        options={{
                            disableDefaultUI: true,
                            styles: mapStyle,
                        }}
                    >
                        {
                            markers.map((marker, index) => {
                                return (
                                    <Marker position={marker} key={index} />
                                )
                            })
                        }
                    </GoogleMap> : null
            }
        </Container>
    )
}

export default Map