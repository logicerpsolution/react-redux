import React from 'react';
import {ProgressBar} from './ProgressBar';

class ListContacts extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
               {
                   "id":1,
                   "name":"Samuel Barrett",
                   "userimage":"user-avatar-1.png",
                   "ProgressValue":98
               },
               {
                   "id":2,
                   "name":"Scott Love",
                   "userimage":"user-avatar-2.png",
                   "ProgressValue":88
               },
               {
                   "id":3,
                   "name":"Michael McDaniel",
                   "userimage":"user-avatar-3.png",
                   "ProgressValue":88
               },
               {
                   "id":4,
                   "name":"Alejandro Wilkerson",
                   "userimage":"user-avatar-4.png",
                   "ProgressValue":81
               },
               {
                   "id":5,
                   "name":"Ivan Fowler",
                   "userimage":"user-avatar-5.png",
                   "ProgressValue":78
               }
            ]
        }
    }
    render() {
        return (
                       <div>
        <div className="panel-body list-group list-group-contacts">
            <table>
                <tbody>
             {this.state.data.map((user, i) => <TableRow key = {i} 
        data = {user} />)}
                </tbody>
            </table>
        </div>
        <div className="panel-footer clearfix">
            <a href="javascript:void(0);"><img src="../../../../src/assets/images/users.jpg" alt="" /> +10 more</a>
        </div>
    </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
               <td><img src={"../../../../src/assets/images/" +this.props.data.userimage }  alt="" /></td>
               <td><h5>{this.props.data.name}</h5></td>
               <ProgressBar ProgressValue={this.props.data.ProgressValue} name="abc" />
             </tr>
        );
    }
}
export {ListContacts};
