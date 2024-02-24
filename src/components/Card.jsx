import React from "react"

function Card(props){
return <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">Project One</a>
            </h4>
            <p className="card-text">desc</p>
    </div>
    </div>
</div>
}

export default Card