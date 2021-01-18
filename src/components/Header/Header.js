import React from 'react';
import './Header.css';  
import UsuarioGet from '../Usuario/UsuarioGet';
function Header(props) {
    return (
      <div>
		  
	<nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
           
          <a className="navbar-brand" href="">Sistema de Evaluaciones</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li><a href="posts.html">Posts</a></li>
            <li><a href="users.html">Users</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="index.html">Welcome</a></li>
            <li><a href="login.html">Logout</a></li>
          </ul>
        </div> 
      </div>
    </nav>
    <header id="header">
    <div className="container">
    	<div className="row">
    		<div className="col-md-10">
    			<h1><span className="glyphicon glyphicon-cog" aria-hidden="true">
					</span> 
				</h1>
    		</div> 
    	</div> 
    </div> 
    </header>
	<section id="breadcrumb">
    	<div className="container">
    		<ol className="breadcrumb">
    			<li className="active">Dashboard</li> 
    		</ol>
    	</div>
    </section>
      </div>
    );
  }
  
export default Header;
