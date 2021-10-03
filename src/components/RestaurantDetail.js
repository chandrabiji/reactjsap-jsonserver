import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
export class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id: null,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((response) => {
      response.json().then((result) => {
        //  this.setState({ list: result })
        console.warn(result)
        this.setState({
          name: result.name,
          email: result.email,
          address: result.address,
          rating: result.rating,
          id: result.id
        })
      })
    })
  }
  back() {
    window.location.replace("http://localhost:3001/list");
  }
  render() {
    return (
      <div className="container">
        <h1>Restaurant Detail</h1>
        <Table striped bordered hover size="sm">
          <tr>
            <td>Id</td>
            <td>{this.state.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{this.state.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{this.state.rating}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{this.state.address}</td>
          </tr>
        </Table>
        <button onClick={() => { this.back() }} className="btn btn-primary">Back</button>
      </div>
    )
  }
}

export default RestaurantDetail
