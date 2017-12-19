import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
<header className="header-navigation clearfix">
<div className="navbar-logo">
			<a href="javascript:void(0);"><img src="../../src/assets/images/logo.jpg" /></a>
</div>
<div className="custom-nav">
               <nav className="navbar navbar-default">

			    <div className="navbar-header">
			        <button type="button" className="navbar-toggle collapsed navbtn-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="glyphicon glyphicon glyphicon-menu-hamburger"></span>
			        </button>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
				        <li className="active"><a href="javascript:void(0);">Dashboard</a></li>
						<li><a href="javascript:void(0);">Edit Time</a></li>
						<li><a href="javascript:void(0);">Screenshots</a></li>
						<li><a href="javascript:void(0);">Reports</a></li>
						<li><a href="javascript:void(0);">Payments</a></li>
                        <li><a href="javascript:void(0);">Tasks</a></li>
						<li className="display-mobile">
							<ul>
								<li><a href="javascript:void(0);"><i className="fa fa-cog"></i></a></li>
								<li><a href="javascript:void(0);"><i className="fa fa-question-circle"></i></a></li>
								<li><a href="javascript:void(0);"><i className="fa fa-bullhorn"></i></a></li>
							</ul>
						</li>
                    </ul>
			    </div>
               </nav>
</div>
<div className="right-menu">
			<div className="login-user-wrap">
				<ul>
					<li className="login-user"><a href="javascript:void(0);"><img src="../../src/assets/images/login-user.png" alt="" /></a></li>
					<li className="login-user-settings">
						<div className="btn-group">
							<button type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img src="../../src/assets/images/settings.jpg" alt="" className="img-setting" /> <img src="../../src/assets/images/dropdown arrow down - icon.svg" alt="" className="caret-icon" />
							</button>
							<ul className="dropdown-menu animated zoomIn">
								<li><a href="javascript:void();"><span className="glyphicon glyphicon-user"></span>  My Profile</a></li>
								<li><a href="javascript:void();"><span className="glyphicon glyphicon-cog"></span>   Account Settings</a></li>
								<li><a href="javascript:void();"><span className="fa fa-sign-out"></span> Sign Out</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div className="xn-icon-button">
				<a href="javascript:void(0);"><i className="fa fa-cog"></i> <img src="../../src/assets/images/dropdown arrow down - icon.svg" alt="" className="caret-icon" /></a>
			</div>
			<div className="xn-icon-button">
				<a href="javascript:void(0);"><i className="fa fa-question-circle"></i> <img src="../../src/assets/images/dropdown arrow down - icon.svg" alt="" className="caret-icon" /></a>
			</div>
			<div className="xn-icon-button">
				<a href="javascript:void(0);"><i className="fa fa-bullhorn"></i></a>
				<div className="panel panel-default animated zoomIn xn-drop-left">
					<div className="panel-heading clearfix">
                        <h3 className="panel-title"><span className="fa fa-bell"></span> Notifications</h3>
                        <div className="pull-right">
                            <span className="label label-danger">4 new</span>
                        </div>
					</div>
					<div className="panel-body list-group">
						<a className="list-group-item" href="#">
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="media-body">
                                    <h5>New message from Weno Carasbong</h5>
                                    <small>June 20, 2017</small>
                                </div>
                            </div>
						</a>
						<a className="list-group-item" href="#">
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="media-body">
                                    <h5>Renov Leonga is now following you!</h5>
                                    <small>June 18, 2017</small>
                                </div>
                            </div>
						</a>
						<a className="list-group-item" href="#">
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="media-body">
                                    <h5>Zaham Sindil is now following you!</h5>
                                    <small>June 17, 2017</small>
                                </div>
                            </div>
						</a>
						<a className="list-group-item" href="#">
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-thumbs-up"></i>
                                </div>
                                <div className="media-body">
                                    <h5>Rey Reslaba likes your post!</h5>
                                    <small>June 16, 2017</small>
                                    <span>HTML5 For Beginners Chapter 1</span>
                                </div>
                            </div>
						</a>
						<a className="list-group-item" href="#">
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-comment"></i>
                                </div>
                                <div className="media-body">
                                    <h5>Socrates commented on your post!</h5>
                                    <small>June 16, 2017</small>
                                    <span>Temporibus autem et aut officiis debitis...</span>
                                </div>
                            </div>
						</a>
					</div>
					<div className="panel-footer text-center">
                        <a href="javascript:void();">Show all messages</a>
					</div>
				</div>
			</div>
</div>
    </header>
    );
    }
    }


    export {Nav};
