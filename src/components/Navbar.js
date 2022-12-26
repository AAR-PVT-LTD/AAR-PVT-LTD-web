import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { update_user, remove_user } from '../store/action';
// import { logOut, } from '../config/firebase';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      homeIconLink: '/'
    }
    this._renderWithLogin = this._renderWithLogin.bind(this);
  }

  async componentDidMount() {
    this.props.update_user();
    if (this.props.user) {
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.user) {
      if (props.user.isRestaurant) {
        return {
          updated_user: props.user,
          homeIconLink: '/order-requests',
        }
      } else {
        return {
          updated_user: props.user,
        }
      }
    } else {
      return {
        updated_user: {
          isLogin: false,
        }
      }
    }
  }

  handleLogOutBtn(){
    this.props.remove_user()
    // console.log(this.props.history)
    this.props.history.push('/')
  }

  _renderWithOutLogin() {
    return (
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item">
          <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
        </li> */}
        <li className="nav-item">
          <span className="nav-link text-uppercase mr-2"><Link to="/login">Login / Register</Link></span>
        </li>
        <li className="nav-item">
          <Link to="/register-restaurant">
            <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3">Register Restaurant</button>
          </Link>
        </li>
      </ul>
    )
  }

  _renderWithLogin() {
    const { updated_user } = this.state
    if (updated_user.isRestaurant) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2"><Link to="/add-menu-items">Add Foods</Link></span>
          </li>
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2"><Link to="/my-foods">My Foods</Link></span>
          </li>
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2"><Link to="/order-requests">Order Requests</Link></span>
          </li>
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2">{updated_user.userName}</span>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={() => this.handleLogOutBtn()}>Log Out</button>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
          </li> */}
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2"><Link to="/my-orders">My Orders</Link></span>
          </li>
          <li className="nav-item">
            <span className="nav-link active text-uppercase mr-2">{updated_user.userName}</span>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={() => this.handleLogOutBtn()}>Log Out</button>
          </li>
        </ul>
      )
    }
  }

  render() {
    const { updated_user, homeIconLink } = this.state
    return (
      // Navbar
      <nav className="navbar navbar-expand-lg navbar-dark pt-3">
        
        {/* Brand image */}
        <Link className="navbar-brand" to={homeIconLink}>
          <img alt="Quick Food Logo" src={require("../assets/images/logo.png")} />
        </Link>

        {/* Collapse button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {updated_user.isLogin ? this._renderWithLogin() : this._renderWithOutLogin()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update_user: () => dispatch(update_user()),
    remove_user: () => dispatch(remove_user())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

