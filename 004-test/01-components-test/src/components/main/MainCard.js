import React from 'react';
import { Card } from 'react-bootstrap';

function MainCard() {
    return (
        <div class='mainCard'>
            <Card  style={{ width: '35%', margin: '200px', marginTop: '100px', marginBottom: '100px' }}>
                <Card.Body class='mainCard_style'>
                    <Card.Title>Mision</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Nuestra Mision</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '35%', margin: '200px', marginTop: '100px', marginBottom: '100px' }}>
                <Card.Body class='mainCard_style'>
                    <Card.Title>Vision</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Nuestra Vision</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MainCard
