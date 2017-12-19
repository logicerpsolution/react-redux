import React, { Component } from 'react';
import {render} from 'react-dom';

import {Header} from '../_components/Header';
import {TasksContent} from '../_components/TasksContent';
import { userActions } from '../_actions';
import { connect } from 'react-redux';

class Tasks extends React.Component {
   componentDidMount() {
       debugger;
        this.props.dispatch(userActions.getAllTasks());
    }
    
    render() { debugger;
        return (
            <div>
           <Header/>
           <ul>{this.props.posts && this.props.posts.map((post) =>{return(<li>{post.title}</li>)})}</ul>
           </div>
      );
    }
}

function mapStateToProps1(state){ debugger;
	return {
  	posts: state.posts
  }
}

const connectedTaskPage = connect(mapStateToProps1)(Tasks);
export { connectedTaskPage as Tasks };

//export {Tasks};