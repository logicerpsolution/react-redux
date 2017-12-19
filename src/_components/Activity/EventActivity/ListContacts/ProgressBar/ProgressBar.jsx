import React from 'react';
import PropTypes from 'prop-types';
class ProgressBar extends React.Component {
    render() {
        return (
  <div> <td>	<div className="progress">
									<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0"
        aria-valuemax="100" style={{width: this.props.ProgressValue + "%" }}>
										<span>{this.props.ProgressValue}</span>
									</div>
								</div>
            </td>
							<td><h4>{this.props.ProgressValue}%</h4></td></div>

        );
										}
}
ProgressBar.defaultProps = {
    ProgressValue: 0

}
ProgressBar.propTypes  = {
    name : PropTypes.string.isRequired,
    ProgressValue:  PropTypes.number.isRequired
}
export {ProgressBar};
