import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDateTime } from '../actions/dateTime'
import Schedule from '../Components/Schedule'

const mapStateToProps = state => ({
  date: state.NewServicesReducer.date,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDateTime
}, dispatch)

const dateTimeContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Schedule)

export default dateTimeContainer
