import React from 'react';

class DashboardContent extends React.Component {
   
    render() {
        return (
		<div className="col-sm-12 p0">
			<div className="col-sm-6">
				<h1>Company Dashboard</h1>
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


export {DashboardContent};
