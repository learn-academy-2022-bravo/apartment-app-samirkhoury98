import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props

    return (
      <>
        {apartment &&
          <div className='showbody'>
            <div className='showimg'>
              <img src={apartment.image} />
            </div>
            <div className='showtext'>
              <p>Street: {apartment.street}</p>
              <p>City: {apartment.city}</p>
              <p>State: {apartment.state}</p>
              <p>Price: {apartment.price}</p>
              <p>Bedrooms: {apartment.bedrooms}</p>
              <p>Bathrooms: {apartment.bathrooms}</p>
              <p>Pets: {apartment.pets}</p>
              <p>Manager: {apartment.manager}</p>
              <p>Manager Email: {apartment.email}</p>
              <NavLink to={`/apartmentindex`} className='btn btn-secondary'> Go Back </NavLink>
            </div>
          </div>

        }
      </>)
  }
}
