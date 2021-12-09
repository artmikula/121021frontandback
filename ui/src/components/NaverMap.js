import React from "react";

const containerStyle = {
  width: "350px",
  height: "350px",
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

function CustomMap({ locations = [] }) {

  const curlReq = () => {
    curl "https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16" \
	-H "X-NCP-APIGW-API-KEY-ID: cvx6scy26o" \
	-H "X-NCP-APIGW-API-KEY: RHECfiNfcZGCKKpe3Lrn3k9FLGg15bHA3leOlxca" -v
  };

  const { isLoaded } = useJsApiLoader({});

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? <p>loaded</p> : <p>not loaded</p>;
}

export default React.memo(CustomMap);
