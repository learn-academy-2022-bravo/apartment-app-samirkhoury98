import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props

    return (
      <>
        {apartment &&
          <div>
            <p>Street: {apartment.street}</p>
            <p>City: {apartment.city}</p>
            <p>State: {apartment.state}</p>
            <p>Price: {apartment.price}</p>
            <p>Bedrooms: {apartment.bedrooms}</p>
            <p>Bathrooms: {apartment.bathrooms}</p>
            <p>Pets: {apartment.pets}</p>
            <p>Manager: {apartment.manager}</p>
            <p>Manager Email: {apartment.email}</p>
            <img src={apartment.image} width="200px" />
            <Button>
              <NavLink to={`/apartmentindex`}> Go Back </NavLink>
            </Button>
          </div>

        }
      </>)
  }
}
