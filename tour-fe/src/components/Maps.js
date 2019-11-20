import React, { useState, useEffect, Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Cookies from 'js-cookie';

const Maps = ({ 
  google,
  match,
  getMaps,
  createMap,
  googleMapsList,
  isRequestAgain,
  latLngCenter
}) => {
  const [latLng, setLatLng] = useState({lat: '', lng: '', mapName: ''})
  const [isEditMap, setIsEditMap] = useState(false)

  const { lat, lng, mapName } = latLng
  const { id } = match.params;

  const [showingInfo, setShowWindow] = useState({
    selectedPlace: {name: ''},
    activeMarker: null,
    showingInfoWindow: false,
  })

  const onMarkerClick = (props, marker) => {
    setShowWindow({
      ...showingInfo,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  const onClose = props => {
    if (showingInfo.showingInfoWindow) {
      setShowWindow({
        ...showingInfo,
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  const displayMarkers = () => {
    return googleMapsList.map((googleMap) => {
      return <Marker 
        key={googleMap.id}
        position={{
          lat: googleMap.lat,
          lng: googleMap.lng,
        }}
        onClick={onMarkerClick}
        name={googleMap.mapName}
        />
    })
  }

  const handleEditMap = () => {
    setIsEditMap(!isEditMap)
  }

  const handleAddMap = () => {
    createMap(id, latLng)
    handleEditMap()
    setLatLng({lat: '', lng: '', mapName: ''})
  }

  const onChangeMap = (key, value) => {
    setLatLng({
      ...latLng,
      [key]: value,
    })
  }

  const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  useEffect(() => {
    getMaps(id);
  },[getMaps, id, isRequestAgain])

  return (
    <Fragment>
      <Map
        className='google-map'
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: latLngCenter.lat, lng: latLngCenter.lng }}
      >
        { displayMarkers() }
        <InfoWindow 
          marker={showingInfo.activeMarker}
          visible={showingInfo.showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{showingInfo.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      { 
        !Cookies.get('nickname') ? null :
          googleMapsList.map(googlemap => (
            <div className="padding10" key={googlemap.id}>
              <span className="padding10">Lat：{ googlemap.lat }</span>
              <span className="padding10">Lng：{ googlemap.lng }</span>
              <span className="padding10">地名：{ googlemap.mapName }</span>
              <br />
            </div>
          ))
      }

      {
        !Cookies.get('nickname') ? null :
          !isEditMap
            ? <div className="cancel__btn" onClick={handleEditMap}>新增地圖標記</div>
            : <form>
                <label htmlFor="lat">Lat</label>
                <input type="text" id="lat" value={lat} onChange={(e) => onChangeMap('lat', e.target.value)}/>
                <label htmlFor="lng">Lng</label>
                <input id="lng" value={lng} onChange={(e) => onChangeMap('lng', e.target.value)}/>
                <label htmlFor="mapName">地標</label>
                <input id="mapName" value={mapName} onChange={(e) => onChangeMap('mapName', e.target.value)}/>
                <div className="cancel__btn" onClick={handleAddMap}>送出</div>
                <div className="cancel__btn" onClick={handleEditMap}>取消</div>
              </form> 
      }
    </Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: ''
})(Maps);
