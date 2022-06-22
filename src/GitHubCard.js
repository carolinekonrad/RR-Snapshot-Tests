import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function GitHubCard() {
    const picture = '../public/ck-picture'
    return(
        <div>
            <Card border="primary" style={{width: '25rem'}}>
                <Card.Title>GitHub username: carolinekonrad</Card.Title>
                <Card.Img src="https://avatars.githubusercontent.com/u/89207386?s=400&u=4a97bb5d5e77b41cbbf670ea79f1d287159351ce&v=4" alt="picture"/>
                <Card.Text>Hello, I'm the proud owner of a dog named Lola and an octopus in horse form, Prince</Card.Text>
            </Card>
        </div>
    )
}