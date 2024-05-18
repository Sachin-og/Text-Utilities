import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode!=='light'?'dark':'light'} bg-${props.mode!=='light'?'dark':'light'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
      </ul>
      <div className={`form-check mx-3 form-switch text-${props.modex}`}>
          <input className="form-check-input" type="checkbox" onClick = {props.toggleBlueMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Blue Mode</label>
      </div>
      <div className={`form-check mx-3 form-switch text-${props.modex}`}>
          <input className="form-check-input" type="checkbox" onClick = {props.toggleGreenMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Green Mode</label>
      </div>
      <div className={`form-check mx-3 form-switch text-${props.modex}`}>
          <input className="form-check-input" type="checkbox" onClick = {props.toggleRedMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Red Mode</label>
      </div>

    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string,
};
// Navbar.defaultProps = {
//     title : 'Set Title Here',
// }
