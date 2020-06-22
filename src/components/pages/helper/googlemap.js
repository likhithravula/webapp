import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Pagination from "react-bootstrap/Pagination";

const mapStyles = {
    width: '100vw',
    height: '62vh'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isOpen: false,
            items: [
                {
                    "name": "Freddy Fuego Hausmannsgate",
                    "category": "food",
                    "id": 0,
                    "lat": 59.917792,
                    "lng": 10.754015,
                    "description": "Lorem Ipsum"
                },
                {
                    "name": "Venedig Pizzeria Restaurang & Café",
                    "category": "food",
                    "id": 1,
                    "lat": 56.045759,
                    "lng": 12.697704,
                    "description": "Lorem Ipsum"
                },
                {
                    "name": "Morten Volunteer",
                    "category": "volunteer",
                    "id": 2,
                    "lat": 56.045759,
                    "lng": 12.697704,
                    "description": "Lorem Ipsum"
                }
            ]
        };
    }

    render() {
        const { items } = this.state;
        const test = items;

        let pins = [];
        let setCategories = [];

        for(let elem of test) {
            //console.log(elem.category);
            //console.log(!(elem.category in setCategories));
            if(!(setCategories.includes(elem.category))){
                setCategories.push(elem.category);
                pins.push(
                    <Pagination.Item
                        key={""}
                        className={elem.category}
                        onClick={filterResults()}
                    >
                    </Pagination.Item>
                )
            }
        }

        /*
        /** alternative for rendering pins unconditionally(location)
        /**
        const pins = test.map( (item, index) => (
            <Pagination.Item key={"test"}></Pagination.Item>
        ))
         */

        function handleClick() {
            this.setState({
                isOpen: true
            });
        }

        function setDetails() {

        }

        function filterResults() {
            //hide unwanted categories
        }

        /*TODO add proper map and fill in required attributes of Info Window*/

        return (
            <div>
                <div id="pins-wrapper">
                    <h3>Filter pins</h3>
                    <Pagination className="map-pin">{ pins }</Pagination>
                </div>
                <Map
                    className = "map-container"
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{
                        lat: 59.91,
                        lng: 10.7
                    }}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}

                    {...test.map((pin) => (
                            <Marker
                                className={pin.category}
                                key={pin.id}
                                position={{
                                    lat: pin.lat,
                                    lng: pin.lng
                                }}
                                icon={{
                                    url: `insert_filename_here`
                                }}
                                onClick={() => {
                                    handleClick()
                                }}
                                {...(this.props.isOpen === true ) &&
                                <InfoWindow
                                    google={""}
                                    marker={""}
                                    map={""}
                                    onCloseClick={handleClick()}>
                                    <div>
                                        <h5>{pin.name}</h5>
                                        <div>{pin.description}</div>
                                        <button onClick={setDetails}>Contact</button>
                                    </div>
                                </InfoWindow>
                                }

                            />
                        )
                    )}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer);
