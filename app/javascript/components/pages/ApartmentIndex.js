import React, { Component } from 'react'
import { Card, CardGroup, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <h1 className='indextitle'>Available BigBodys:</h1>
        <CardGroup>
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card body key={apartment.id}>
                <CardTitle>
                  <div className='card-img-wrapper'>
                    <img src={apartment.image} className="card-img" />
                  </div>
                  <h4>Street:</h4>
                  <p>{apartment.street}</p>
                  <h4>City:</h4>
                  <p>{apartment.city}</p>
                  <h4>Price:</h4>
                  <p>{apartment.price}</p>
                  <h4>Manager:</h4>
                  <p>{apartment.manager}</p>



                  <NavLink to={`/apartmentshow/${apartment.id}`} className='btn btn-secondary'> View Apartment </NavLink>



                </CardTitle>
              </Card>
            )
          })}
        </CardGroup>
      </>
    )
  }
}