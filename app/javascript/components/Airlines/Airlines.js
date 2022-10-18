import React, {useState, useEffect, Fragment} from "react";
import Airlineindex from "./Airlineindex";
import styled from "styled-components";
import { airlinesRender } from "../../Api/AirlineApi";
const Home =styled.div`
    text-allign: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header =styled.div`
    padding:50px 50px 10px 50px;
    h1{
        font-size: 42px;
        text-align: center;
    }
`
const Grid =styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Airlines = () => {
    const [airlines, setAirlines] = useState([]) // Airlines data 
     
    useEffect(() =>{
        airlinesRender()
        .then(resp => {
            setAirlines(resp.data.data)
        })
        .catch(error =>{
            console.log(error);
        });  
    },[])
    // Render Each Airline details
    const grid =airlines.map( item =>{
        return (
            <Airlineindex
              key={item.attributes.name}
              attributes={item.attributes}
            />
        )
    })
    return (
        <Home>
            <Header>
                <h1>Flights</h1>
            </Header>
            <Grid>
                 {grid}
            </Grid>
        </Home>
    )
}

export default Airlines