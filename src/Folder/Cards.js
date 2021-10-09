import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({user}) => {
    return (
        <div  className="d-flex justify-content-around flex-wrap"  >
            <Card style={{ width: '18rem' }} id="card-1">
 <div id="card">
 <Card.Body  >
    <Card.Title>{user.id}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
    <Card.Text>{user.username} </Card.Text>
    <Card.Text>{user.email} </Card.Text>
   <div className="adress">
   <Card.Text>{user.address.street} </Card.Text>
    <Card.Text>{user.address.suite} </Card.Text>
    <Card.Text>{user.address.city} </Card.Text>
    <Card.Text>{user.address.zipcode} </Card.Text>
    <Card.Text>{user.address.geo.lat} </Card.Text>
    <Card.Text>{user.address.geo.lng} </Card.Text>
   </div>
    <Card.Text>{user.phone} </Card.Text>
    <Card.Text>{user.website} </Card.Text>
    <div className="company">
    <Card.Text>{user.company.name} </Card.Text>
    <Card.Text>{user.company.catchPhrase} </Card.Text>
    <Card.Text>{user.company.bs} </Card.Text>
    </div>
  </Card.Body>
 </div>
</Card>
        </div>
    )
}

export default Cards
