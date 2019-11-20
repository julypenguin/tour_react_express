import React from 'react';
import Maps from '../components/Maps';
import { connect } from "react-redux";
import { Actions } from "../actions";

const mapsContainer = (props) => <Maps {...props}/>

const mapStateToProps = store => ({
  isRequestAgain: store.post.isRequestAgain,
  googleMapsList: store.post.googleMapsList,
  // isLoadingGetGoogleMapsList:store.post.isLoadingGetGoogleMapsList,
  // getGoogleMapsListError:store.post.getGoogleMapsListError,
});

const mapDispatchToProps = {
  createMap: Actions.CREATE_GOOGLEMAPS,
  getMaps: Actions.GET_GOOGLEMAPS_LIST,
};

export default connect(mapStateToProps, mapDispatchToProps)(mapsContainer);
