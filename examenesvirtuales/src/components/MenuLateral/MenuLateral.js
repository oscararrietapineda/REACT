import React from 'react';
import './MenuLateral.css';

function MenuLateral(props) {
    return (
      <div> 
          <section id="main">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
              <div class="list-group">
              <a href="index.html" class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              </a>
              <a href="pages.html" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Pages <span class="badge">31</span></a>
              <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span class="badge">41</span></a>
              <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span class="badge">59</span></a>
            </div>
            </div>
            </div>
            </div>
            </section> 
      </div>
    );
  }
  
export default MenuLateral;
