import React from "react"
import Card from "./components/Card"
function App() {
  let data=[{
    title:"First",
    Desc:"lorem is a s"
  },
  {
    title:"First",
    Desc:"lorem is a s"
  },
  {
    title:"First",
    Desc:"lorem is a s"
  },
  {
    title:"First",
    Desc:"lorem is a s"
  }]

  return<>
      <div className="container">
<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">
  {
    data.map((e,i)=>{
      return <Card cardData={e} key={i}/>
    })
  }
</div>
</div>
    </>
}

export default App;
