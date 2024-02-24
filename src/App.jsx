import React from "react";

function App() {
  const data = [
    {
      title: "Project One",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project two",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project three",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project four",
      desc: "This is Project Related ",
    },
    {
      title: "Project five",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project six",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project four",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project five",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project six",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project four",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project five",
      desc: "This is Project Related Desc",
    },
    {
      title: "Project six",
      desc: "This is Project Related Desc",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="my-4">
          Page Heading
          <small> Secondary Text</small>
        </h1>

        <div className="row">
          {
            data.map((e,i)=>{
              return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{e.title}</a>
                  </h4>
                  <p className="card-text">
                    {e.desc}
                  </p>
                </div>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
