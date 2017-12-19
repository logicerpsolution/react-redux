import React from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

class TasksContent extends React.Component {
     
   componentDidMount() {
        this.props.dispatch(userActions.getAllTasks());
    }
    render() {
        debugger;

       // const { task, tasks } = this.props;
        return (
		<div className="col-sm-12 p0">
			<div className="col-sm-6">
				<h1>Task List</h1>
			</div>

			<div className="col-sm-6 clearfix">
				<div className="right-buttom-list">
					<a href="javascript:void(0);" className="btn btn-default">Edit Layout</a>
					<a href="javascript:void(0);" className="btn btn-primary"><i className="fa fa-plus"></i> Add Widget</a>
				</div>
			</div>
		</div>
        );
    }
}

function mapStateToProps(state) {
    const { tasks, authentication } = state;
    const { task } = authentication;
    return {
        task,
        tasks
    };
}

const connectedHomePage = connect(mapStateToProps)(TasksContent);
export { connectedHomePage as TasksContent };
