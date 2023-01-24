import { useEffect, useState } from 'react';
import BottomSheet from '../BottomSheet/BottomSheet';
import Map from "../Map/Map";
import SplashScreen from '../SplashScreen/SplashScreen';

const mapsindoors = window.mapsindoors;

/**
 *
 * @param {Object} props
 * @param {string} props.apiKey - MapsIndoors API key or solution alias.
 * @param {string} [props.gmApiKey] - Google Maps API key if you want to show a Google Maps map.
 * @param {string} [props.mapboxAccessToken] - Mapbox Access Token if you want to show a Google Maps map.
 * @param {string} [props.venue] - If you want the map to show a specific Venue, provide the Venue name here.
 */
function MapsIndoorsMap({ apiKey, gmApiKey, mapboxAccessToken, venue }) {

    /*
     * React on changes in the MapsIndoors API key.
     */
    useEffect(() => {
        mapsindoors.MapsIndoors.setMapsIndoorsApiKey(apiKey);
    }, [apiKey]);

    const [isMapReady, setMapReady] = useState(false);

    function onMapReady() {
        setMapReady(true);
    }

    return (<div className="map">
        {/* Splash screen, bottoms sheets, venue selector etc. can be here */}
        {!isMapReady && <SplashScreen />}
        <BottomSheet></BottomSheet>
        <Map apiKey={apiKey} gmApiKey={gmApiKey} mapboxAccessToken={mapboxAccessToken} onReady={onMapReady} venueName={venue} />
    </div>)
}

export default MapsIndoorsMap;
