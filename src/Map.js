import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import React from 'react';

import InfoWindowMap from './InfoWindowMap';

const center = {
  lat: 51.0607,
  lng: -1.3132,
};

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

function map() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyAcLjda4GaQqHCh7jHSCV23j7rqFJpv9HE'>
      <GoogleMap center={center} zoom={8} mapContainerStyle={containerStyle}>
        <InfoWindowMap
          lat={50.7192}
          lng={-1.8808}
          label={'10th January - First trip to Bournemouth'}
        ></InfoWindowMap>

        <InfoWindowMap
          lat={50.921382}
          lng={-1.209897}
          label={'First uni hotel sleepover'}
        ></InfoWindowMap>

        <InfoWindowMap
          lat={50.885162}
          lng={-1.245668}
          label={'First uni hotel sleepover - went for dinner'}
        ></InfoWindowMap>

        <InfoWindowMap
          lat={51.06}
          lng={-1.3277}
          label={'University of Winchester'}
        ></InfoWindowMap>

        <InfoWindowMap
          lat={53.40124}
          lng={-1.3277}
          label={'Sheffield BUCS'}
        ></InfoWindowMap>
      </GoogleMap>
    </LoadScript>
  );
}

export default map;

// export default function Map() {
//   return (
//     <div>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//       />
//     </div>
//   );
// }
