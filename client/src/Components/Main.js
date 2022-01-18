import React from 'react'
import EventList from './Events/EventList';
import { Route, Switch } from 'react-router';
import AddEvent from './Events/AddEvent';
import Home from './Home';
import EditEvent from './Events/EditEvent';
import { EventView } from './Events/EventView';
import ActivityList from './Activity/ActivityList';
import EditActivity from './Activity/EditActivity';
import AddActivity from './Activity/AddActivity';
import Participe from './Participe';

const Main = () => {
    return (
      <div className="height-100 bg-light main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/activity" component={ActivityList} />
          <Route exact path="/activity/edit/:id" component={EditActivity} />
          <Route exact path="/activity/add" component={AddActivity} />
          <Route exact path="/events" component={EventList} />
          <Route exact path="/events/add" component={AddEvent} />
          <Route exact path="/events/edit/:id" component={EditEvent} />
          <Route exact path="/events/:id" component={EventView} />
          <Route exact path="/eventsList" component={Participe} />
        </Switch>
      </div>
    )
}

export default Main
