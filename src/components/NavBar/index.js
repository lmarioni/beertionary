import React from 'react'
import {Link} from '@reach/router'
import { TiBeer } from "react-icons/ti";

export const NavBar = () =>  {
  return (
    <nav class="navbar navbar-dark bg-dark justify-content-between">
    <Link to="/" class="navbar-brand" > <TiBeer style={{color: '#03D3AC'}} size='30' /> Beertionary</Link>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
  </nav>
  )
}
