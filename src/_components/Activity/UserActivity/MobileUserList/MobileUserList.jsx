import React from 'react';
const rd3 = require('react-d3-library');
import {UserData} from './UserData';

class MobileUserList extends React.Component {
    render() {
        return (
            <div>
                <div className="panel-body list-group mobile-user-list">
                <div className="col-sm-6">
                <ul>
                <li>
                <UserData UserName="Benjamin Tyler" Color="color-circle bg-yellow" Time="20h 45m"/>
                </li>
                <li>
                 <UserData UserName="Darrel Hart" Color="color-circle bg-red" Time="20h 45m"/>
                </li>
                <li>
                 <UserData UserName="Lester Douglas" Color="color-circle bg-sky-blue" Time="20h 45m"/>
                </li>
                <li>
                  <UserData UserName="Georgia Harper" Color="color-circle bg-purple" Time="20h 45m"/>
                </li>
                <li>
                 <UserData UserName="Olga Simpson" Color="color-circle bg-green" Time="20h 45m"/>
                </li>
                </ul>
                </div>
                <div className="col-sm-6">
                <div id="Container"></div>
                </div>
                </div>
                <div className="panel-footer clearfix">
                <ul>
                <li><span className="color-rect bg-light-green"></span> <p>Actual Hours</p></li>
                <li><span className="color-rect bg-dark-green"></span> <p>Hours Worked More</p></li>
                </ul>
                </div>
            </div>
        );
    }
}
export {MobileUserList};
