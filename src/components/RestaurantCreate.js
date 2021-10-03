import React, { Component } from 'react'
import Footer from './Footer';
export class RestaurantCreate extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
    }
  }
  create()
  {
    fetch('http://localhost:3000/restaurant',{
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been added");
       // window.open("http://localhost:3001/list","_self");
       window.location.replace("http://localhost:3001/list");
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br /><br /><br />
          <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br /><br />
          <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
          <button onClick={() => { this.create() }} className="btn btn-primary">Add Restaurant</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default RestaurantCreate
