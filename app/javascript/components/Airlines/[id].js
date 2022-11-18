import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../SharedComponent/Header'
import Form from '../Review/Form'
import Review from '../Review/Review'
import { reviewDetail } from '../../api/AirlineApi'
import {
  Wrapper,
  ColumnLeft,
  ColumnRight,
  Main,
  ReviewBackground
} from './Airlines.style'

const Airline = () => {
  const { slug } = useParams() // useParams hook used for taking parameters from url.
  const [airline, setAirline] = useState({}) // Reflect state update for an Airline.
  const [loaded, setLoaded] = useState(false) // used for checking the data is loaded or not.
  const [check, setCheck] = useState(true)
  useEffect(() => {
    reviewDetail(slug)
      .then((resp) => {
        console.log(resp)
        setAirline(resp.data)
        setLoaded(true)
      })
      .catch((error) => console.log('error', error))
  }, [check])

  const setAirlineSubmitForm = (resp) => {
    const included = [...airline.included, resp.data.data]
    setAirline({ ...airline, included })
    setCheck(false)
  }

  console.log(airline.data)
  // Show Page for Airline which contain Header Component, and Reviews for Each user in left hand side and Form to add New review in Right hand Side.
  return (
    <div>
      <Wrapper>
        {loaded && (
          <>
            <ColumnLeft>
              <Main>
                <Header
                  attributes={airline.data.attributes}
                  reviews={airline.included}
                />
              </Main>
              {airline.included.map((item, index) => (
                <Review
                  key={index}
                  id={item.id}
                  indexValue={index}
                  attributes={item.attributes}
                />
              ))}
            </ColumnLeft>
            <ReviewBackground background={airline.data.attributes.image_url}>
              <ColumnRight>
                <Form
                  attributes={airline.data.attributes}
                  airline_id={airline.data.id}
                  // checkuser={checkuser}
                  setAirlineSubmitForm={setAirlineSubmitForm}
                />
              </ColumnRight>
            </ReviewBackground>
          </>
        )}
      </Wrapper>
    </div>
  )
}
export default Airline
