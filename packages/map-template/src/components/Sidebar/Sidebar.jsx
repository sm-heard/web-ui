import { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import LocationDetails from "../LocationDetails/LocationDetails";
import Wayfinding from '../Wayfinding/Wayfinding';
import Directions from '../Directions/Directions';
import Search from '../Search/Search';

/**
 * @param {Object} props
 * @param {Object} props.currentLocation - The currently selected MapsIndoors Location.
 * @param {Object} props.setCurrentLocation - The setter for the currently selected MapsIndoors Location.
 * @param {Object} props.currentCategories - The unique categories displayed based on the existing locations.
 * @param {function} props.onLocationsFiltered - The list of locations after filtering through the categories.
 * @param {function} props.onDirectionsOpened - Check if the directions page state is open.
 * @param {function} props.onDirectionsClosed - Check if the directions page state is closed.
 * @param {string} props.currentVenueName - The currently selected venue.
 * @param {function} props.pushAppView - Function to push to app view to browser history.
 * @param {string} props.currentAppView - Holds the current view/state of the Map Template.
 * @param {array} props.appViews - Array of all possible views.
 *
 */
function Sidebar({ currentLocation, setCurrentLocation, currentCategories, onLocationsFiltered, onDirectionsOpened, onDirectionsClosed, currentVenueName, pushAppView, currentAppView, appViews }) {
    const [directions, setDirections] = useState();

    /*
     * React on changes on the current location.
     */
    useEffect(() => {
        if (currentLocation && currentAppView !== appViews.LOCATION_DETAILS) {
            pushAppView(appViews.LOCATION_DETAILS, currentLocation);
        }
    }, [currentLocation]);

    /**
     * Set the active page and trigger the visibility of the floor selector to be shown.
     *
     * @param {number} page
     */
    function setPage(page) {
        pushAppView(page);
        onDirectionsClosed();
    }

    /**
     * Navigate to the directions page and trigger the visibility of the floor selector to be hidden.
     */
    function setDirectionsPage() {
        pushAppView(appViews.DIRECTIONS);
        onDirectionsOpened();
    }

    /**
     * Navigate to the search page and reset the location that has been previously selected.
     */
     function setSearchPage() {
        setPage(appViews.SEARCH);
        setCurrentLocation();
    }

    const pages = [
        <Modal isOpen={currentAppView === appViews.SEARCH} key="A">
            <Search
                onLocationClick={(location) => setCurrentLocation(location)}
                categories={currentCategories}
                onLocationsFiltered={(locations) => onLocationsFiltered(locations)}
                currentVenueName={currentVenueName}
            />
        </Modal>,
        <Modal isOpen={currentAppView === appViews.LOCATION_DETAILS} key="B">
            <LocationDetails
                onStartWayfinding={() => setPage(appViews.WAYFINDING)}
                location={currentLocation}
                onBack={() => setSearchPage()}
            />
        </Modal>,
        <Modal isOpen={currentAppView === appViews.WAYFINDING} key="C">
            <Wayfinding
                onStartDirections={() => setDirectionsPage()}
                location={currentLocation}
                onDirections={result => setDirections(result)}
                onBack={() => setPage(appViews.LOCATION_DETAILS)}
                isActive={currentAppView === appViews.WAYFINDING}
            />
        </Modal>,
        <Modal isOpen={currentAppView === appViews.DIRECTIONS} key="D">
            <Directions
                isOpen={currentAppView === appViews.DIRECTIONS}
                directions={directions}
                onBack={() => setPage(appViews.WAYFINDING)}
            />
        </Modal>
    ]

    return (
        <div>
            {pages}
        </div>
    )
}

export default Sidebar;