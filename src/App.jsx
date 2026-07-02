import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';
import { useCallback } from 'react';

import BikeRackDatasetLayer from './BikeRackDatasetLayer';
import CyclingPathDatasetLayer from './CyclingPathDatasetLayer';
import Legend from "./Legend";

function App() {

  return (
    <APIProvider 
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 1.290270, lng: 103.851959 }}
        defaultZoom={12}
        mapTypeControl={false}
        mapId={'6cbfee565110901d6274cbeb'}
        gestureHandling="greedy"
      >

        <BikeRackDatasetLayer/>
        <CyclingPathDatasetLayer/>

      </Map>

      <Legend/>
      
     
    </APIProvider>
  )
}

export default App
