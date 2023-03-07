import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <mi-icon icon-name="marker"></mi-icon>
                <h1>MapsIndoors Map</h1>
            </header>

            <div className="app__map-container">
                {/* This is the Map Template component */}
                <mapsindoors-map apiKey="mapspeople" venue="Stigsborgvej"
                    mapboxAccessToken="[INSERT-TOKEN]">
                </mapsindoors-map>
            </div>
        </div>
    );
}

export default App;
