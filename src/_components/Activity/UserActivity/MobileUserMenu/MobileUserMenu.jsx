import React from 'react';


class MobileUserMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Weekly'};

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="panel-heading clearfix">
					<div className="panel-title-box"><h3>Highest Mobile users</h3></div>
					<div className="panel-controls">
						<div className="extra-settings">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img src="../../../../src/assets/images/Settings-icon-default.svg" alt="" />
								</button>
								<ul className="dropdown-menu">
									<li><a href="#">Edit widget</a></li>
									<li><a href="#">Delete widget</a></li>
								</ul>
							</div>
						</div>
						<div className="daily-control">
							<select value={this.state.value} onChange={this.handleChange}>
								<option value="Daily">Daily</option>
								<option value="Weekly">Weekly</option>
								<option value="Monthly">Monthly</option>
								<option value="Yearly">Yearly</option>
							</select>
						</div>
					</div>
				</div>
        );
    }
}


export {MobileUserMenu};
