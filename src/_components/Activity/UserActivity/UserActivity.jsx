import React, { Component } from 'react';
import {render} from 'react-dom';
import {MobileUserMenu} from './MobileUserMenu';
import {MobileUserList} from './MobileUserList';

class UserActivity extends React.Component {
    render() {
        return (
           <div className="col-sm-6">
                <MobileUserMenu />
                <MobileUserList />
                </div>
    );
    }
}
 export {UserActivity};