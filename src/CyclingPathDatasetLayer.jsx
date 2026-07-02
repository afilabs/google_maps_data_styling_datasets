import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

const CYCLING_PATH_DATASET_ID = "98f87c3d-f9e1-4ea1-81ee-b56ce9f063fb";


export default function CyclingPathDatasetLayer({}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const layer = map.getDatasetFeatureLayer(CYCLING_PATH_DATASET_ID);

    /*
      Original (red) feature style function

      layer.style = (params) => {
        return {
          strokeColor: "#DD7E7A",
          strokeWeight: 3.0,
          strokeOpacity: 1.0,
        };
      };  

    */

    layer.style = (params) => {
      const attrs = params.feature.datasetAttributes;
      const isPlanned = attrs.PRP_STATUS === "PLANNED";

        return {
          strokeColor: isPlanned ? "#F2A623" : "#1D9E75", // planned = amber, built = green
          strokeWeight: isPlanned ? 2.0 : 3.5,            // built reads heavier
          strokeOpacity: isPlanned ? 0.7 : 1.0,
        };
    };

    return () => {
      layer.style = null;
    };
  }, [map,]);

  return null;
}