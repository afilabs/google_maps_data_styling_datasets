import { useMap, InfoWindow } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const BIKE_RACK_DATASET_ID = "92fea2b3-9ba9-41f2-ae37-7b39c94df108";

export default function BikeRackDatasetLayer() {
  const map = useMap();
  const [popup, setPopup] = useState(null); // { position, attributes }

  useEffect(() => {
    if (!map) return;

    const layer = map.getDatasetFeatureLayer(BIKE_RACK_DATASET_ID);

    layer.style = (params) => {
      const attrs = params.feature.datasetAttributes;
 
      return {
        pointRadius: 6,
        fillColor: "#83ABEB",
        fillOpacity: 1.0,
        strokeColor: "#ffffff",
        strokeWeight: 0.8,
      };
    };

    const clickListener = layer.addListener("click", (event) => {
      const feature = event.features?.[0];
      if (!feature) return;
      setPopup({ position: event.latLng, attributes: feature.datasetAttributes });
    });

    return () => {
      clickListener.remove();
      layer.style = null;
    };
  }, [map]);

  if (!popup) return null;

  return (
    <InfoWindow position={popup.position} onCloseClick={() => setPopup(null)}>
      <div dangerouslySetInnerHTML={{ __html: popup.attributes.Description }} />
    </InfoWindow>
  );
}