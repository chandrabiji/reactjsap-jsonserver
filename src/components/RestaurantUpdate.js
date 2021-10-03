import React, { Component } from 'react'

export class RestaurantUpdate extends Component {
  constructor()
  {
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
      id:null,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((response) => {
      response.json().then((result) => {
        //  this.setState({ list: result })
        console.warn(result)
        this.setState({
           name: result.name,
           email:result.email,
           address:result.address,
           rating:result.rating,
           id:result.id
          })
      })
    })
  }
  update(){
    fetch('http://localhost:3000/restaurant/'+this.state.id,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been Updated");
       // window.open("http://localhost:3001/list","_self");
       window.location.replace("http://localhost:3001/list");
      })
    })
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} value={this.state.name} /><br /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} value={this.state.email} /><br /><br /><br />
          <input onChange={(event) => { this.setState({ rating: event.target.value }) }} value={this.state.rating} /><br /><br /><br />
          <input onChange={(event) => { this.setState({ address: event.target.value }) }} value={this.state.address} /><br /><br />
          <button onClick={() => { this.update() }} className="btn btn-primary">Update</button>
        </div>
      </div>
    )
  }
}

export default RestaurantUpdate
