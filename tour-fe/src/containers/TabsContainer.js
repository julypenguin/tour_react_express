import React from 'react';
import Tabs from '../components/Tabs';
import { connect } from "react-redux";

const TabContainer = (props) => <Tabs {...props}/>

const mapStateToProps = store => ({
  postList: store.post.postList,
});

export default connect(mapStateToProps, null)(TabContainer);
