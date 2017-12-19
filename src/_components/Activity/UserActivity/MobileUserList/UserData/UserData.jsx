import React from 'react';
import PropTypes from 'prop-types';

class UserData extends React.Component {
    render() {
        return (
  <div className="media">
									<div className="media-left">
      <div className={this.props.Color}></div></div>
									<div className="media-body">
										<small>{this.props.UserName}</small>
										<h4>{this.props.Time}</h4>
									</div>
								</div>

        );
    }
}
UserData.defaultProps = {
    Time: 0,
    UserName : "User",
    Color : "color-circle bg-yellow"

}
UserData.propTypes  = {
    Color : PropTypes.string.isRequired,
    UserName:  PropTypes.string.isRequired
}
export {UserData};
