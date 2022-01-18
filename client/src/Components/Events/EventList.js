import { useState, useEffect } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { AiTwotoneEdit, AiFillEye } from 'react-icons/ai'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import EventService from '../../services/EventService';
import './event.css'

const EventList = () => {

  const [events, setEvent] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    EventService.getAll()
      .then((res) => {
        setEvent(res.data.response);
      })
      .catch(e => { console.log(e); });
  }

  const deleteEvent = async (id) => {
    EventService.remove(id)
      .then(() => { getEvents(); })
      .catch(e => { console.log(e); });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 my-3">
          <Link to="events/add" >
            <div className="card event add-event">
              <div className="icon-add"> <IoIosAddCircle size={60} color='rgba(209, 209, 209, 0.609)' />    </div>
            </div>
          </Link>
        </div>
        {events.map((event) => (
          <div className=" col-md-3 col-sm-6 my-3 " key={event._id} >
            <div className=" event card" style={{ width: '18rem' }}>
              <Link to={`events/${event._id}`}>
                <img className="card-img-top" src={event.imageURL === "" ? "img/evenement.png" : event.imageURL} alt={event.imageURL} />
              </Link>
              <div className="card-body">
                <Link to={`events/${event._id}`} style={{ textDecoration: 'none', color: "black" }} >
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text"><BsFillCalendar2DateFill />  {event.date.substr(0, 10)}  {event.date.substr(11, 5)}</p>
                </Link>
                <div className="center-block my-2">
                  <Link to={`events/edit/${event._id}`} className="btn btn-warning mx-2" > <AiTwotoneEdit /> </Link>
                  <button className="btn btn-primary mx-2" > <AiFillEye /> </button>
                  <button className="btn btn-danger mx-2" onClick={() => deleteEvent(event._id)}> <FaTrash /> </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )


}

export default EventList;