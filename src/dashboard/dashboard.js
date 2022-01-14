import React from 'react';
import { Card } from 'react-bootstrap';

export const DashboardPage = (props,isLogedIn) => {

    if(props.isIdleTimeOut) {
        props.history.push('/')
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src="https://yt3.ggpht.com/ytc/AKedOLRegNp9KckexLtHEU-lIQZga9-pfe1a3_5jvBcK_A=s900-c-k-c0x00ffffff-no-rj" />
                <Card.Body style={{backgroundColor:"white"}}>
                    <Card.Title>Hello Guest!</Card.Title>
                    <Card.Text>
                    This is Ladinar Nanda Aprilia's Gallery<br/>
                    Nim : 2201864675<br/>
                    <br/><br/>
                    <a ><i className='fa fa-arrow-right'></i> More Info</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>            
        </div>
    )
}
