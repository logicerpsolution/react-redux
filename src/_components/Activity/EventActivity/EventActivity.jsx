import React, { Component } from 'react';
import {render} from 'react-dom';
import {ActivityMenu} from './ActivityMenu';
import {ListContacts} from './ListContacts';

class EventActivity extends React.Component {
    render() {
        return (
           <div className="col-sm-6">
                <ActivityMenu />
                <ListContacts />
                </div>
    );
    }
}
 export {EventActivity};
