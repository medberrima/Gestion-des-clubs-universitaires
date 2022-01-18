
import React from 'react'
import LineChart from './LineChart';
import { useState, useEffect } from 'react'
import EventService from '../services/EventService';
import ActivityService from '../services/ActivityService';

const Home = () => {

  const[nbActivities, setNbActivities] =useState();
  const[nbEvents, setNbEvents] =useState();

  useEffect(() => {
    getEvents();
    getActivities();
  }, []);

  const getEvents = async () => {
    EventService.getAll()
      .then((res) => {  setNbEvents(res.data.response.length) })
      .catch(e => { console.log(e); });
  }

  const getActivities = async () => {
    ActivityService.getAll()
      .then((res) => {  setNbActivities(res.data.response.length) })
      .catch(e => { console.log(e); });
  }

  return (
    <div>
      <div className="row mx-5">
        <div className="col-md-4 col-sm-12 col-12 " >
          <div className="card">
            <div className="card-body">
              <h5 className="text-muted">Membres</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">35</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                {/* <span className="icon-circle-small icon-box-xs text-danger ml-4 "><i className="fa fa-fw fa-arrow-down"></i></span><span class="ml-1 text-danger">3.86%</span> */}
              </div>
            </div>
            <div id="sparkline-revenue"></div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-muted">Events </h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">{nbEvents}</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                <span><i className="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
              </div>
            </div>
            <div id="sparkline-revenue2"></div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-muted">Activities</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">{nbActivities}</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                <span><i className="fa fa-fw fa-arrow-up"></i></span><span>3.22%</span>
              </div>
              <div className=" d-inline-block float-right text-primary font-weight-bold">
                {/* <span>N/A</span> */}
              </div>
            </div>
            <div id="sparkline-revenue3"></div>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-md-12 card rounded shadow-sm border-0 my-5">
          <LineChart />
        </div>

      </div>
    </div>
  )
}

export default Home
