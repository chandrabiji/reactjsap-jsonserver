import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faInfo,faTrash } from '@fortawesome/free-solid-svg-icons'
export class RestauranstList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }
  delete(id) {

    alert("Delete!"+id);
    fetch("http://localhost:3000/restaurant/"+id,{
      method: "DELETE",
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been Deleted");
       // window.open("http://localhost:3001/list","_self");
       window.location.replace("http://localhost:3001/list");
      })
    })
  }
  render() {

    return (
      <div>
        <h1>Restauranst List</h1>
        {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.list.map((item, i) =>
                      //<div className="list-wrapper">
                      //   <span>{item.name}</span>
                      //   <span>{item.email}</span>
                      //    <span>{item.address}</span>
                      //  </div>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td>
                        <span><Link to={"/update/" + item.id} className="btn btn-primary"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></span>
                          <span><Link to={"/details/" + item.id} className="btn btn-info"><FontAwesomeIcon icon={faInfo}></FontAwesomeIcon></Link></span>
                          <span onClick={()=>this.delete(item.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
                        </td>
                      </tr>
                    )
                  }

                </tbody>
              </Table>
            </div>
            : <p>Please wait</p>
        }
        <Footer />
      </div>
    )
  }
}

export default RestauranstList
