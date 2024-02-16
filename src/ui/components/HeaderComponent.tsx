import React from 'react';
import RenderCSS from '../../lib/styles/RenderCSS';

export default class HeaderComponent extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (

      <div className='header'>
        <div className='preHeader'>
          <div className='container-fluid'>
            <img src='https://staging.121digital.co.uk/wp-content/uploads/2024/02/121-Digital-Logo-Light-BG.png' />
          </div>
        </div>

        <nav className="navbar navbar-default">  
            <div className="navbar-local color-accent theme-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="glyph glyph-hamburger"></i>
                        </button>
                        {/* <a className="navbar-brand" href="#">121 Control Panel</a> */}
                    </div>
        
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <i className="glyph glyph-chevron-down-2"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
        
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Notifications (0)</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Your Account <i className="glyph glyph-chevron-down-2"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
  }

}