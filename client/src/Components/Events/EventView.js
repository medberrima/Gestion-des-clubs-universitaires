import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import EventService from '../../services/EventService';
import './event.css'

export const EventView = () => {
  let initialEvent = {
    title: "",
    type: "",
    description: "",
    place: "",
    date: "",
    duration: "",
    etat: "à venir",
    club: {}
  }
  const { id } = useParams();
  const [event, setEvent] = useState(initialEvent);

  useEffect(() => {
    getEventById();
  }, []);

  const getEventById = async () => {
    EventService.get(id)
      .then((res) => {
        setEvent(res.data.response);
      })
  }

  return (

    <div className="section produit-info text-left">
      <div className="container">
        <div className="row">
          <div className="col-md-6" >
            <Link className="primary-btn mb-2" to="/events"> back to Home</Link>
            <div id="product-main-img">
              <div className="product-preview text-center ">
                <img src={event.imageURL === "" ? "../img/evenement.png" : "../" + event.imageURL} alt={event.imageURL} />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name mt-5">{event.title}</h2>
              <div>
                <div className="product-rating">
                  {/* {setStarts(event.rank)} */}
                  {/* <span className="badge bg-secondary mx-1">{event.rank}.0</span> */}

                </div>
                {/* <a className="review-link" href="#">10 Review(s) | Add your review</a> */}
              </div>
              <div>
                <h5 className="product-price">{event.place} </h5>
                <span className="product-available">{event.date.substr(0, 10)}  {event.date.substr(11, 5)}</span>
              </div>
              <p>{event.description}</p>
              {console.log(event.club)}

              {/* <div className="add-to-cart">
          <div className="qty-label">
            Qty
            <div className="input-number">
              <input type="number"/>
              <span className="qty-up">+</span>
              <span className="qty-down">-</span>
            </div>
          </div>
          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
        </div> */}

              {/* <ul className="product-btns">
          <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
        </ul> */}

              <ul className="product-links">
                <li>event club:</li>
                <li><a href="#">{event.club.nomClub}</a></li>
                <li>contact:</li>
                <li><a href="#">{event.club.email}</a></li>

              </ul>

              {/* <ul className="product-links">
          <li>Share:</li>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-envelope"></i></a></li>
        </ul> */}

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
