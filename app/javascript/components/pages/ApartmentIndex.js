import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <h3>Available BigBodys:</h3>
        <Col sm="6">
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card body key={apartment.id}>
                <CardTitle>
                  <h4>Street:</h4>
                  <h4>{apartment.street}</h4>
                  <h4>City:</h4>
                  <h4>{apartment.city}</h4>
                  <h4>Price:</h4>
                  <h4>{apartment.price}</h4>
                  <h4>Manager:</h4>
                  <h4>{apartment.manager}</h4>
                  <img src={apartment.image} width="200px" />

                  <button>
                    <NavLink to={`/apartmentshow/${apartment.id}`}> View Apartment </NavLink>
                  </button>


                </CardTitle>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}