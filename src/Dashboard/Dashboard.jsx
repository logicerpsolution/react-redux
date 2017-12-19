import React, { Component } from 'react';
import {render} from 'react-dom';

import {Header} from '../_components/Header';
import {DashboardContent} from '../_components/DashboardContent';
import {EventActivity} from '../_components/Activity/EventActivity';
import {UserActivity} from '../_components/Activity/UserActivity';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
           <Header/>
           <DashboardContent /> 
          <EventActivity />
          <UserActivity />
           </div>
      );
    }
}

export {Dashboard};