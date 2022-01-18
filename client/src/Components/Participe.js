import { useState, useEffect } from 'react'
import { IoMdAddCircle} from 'react-icons/io'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import EventService from '../services/EventService'

const Participe = () => {

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

  const participeEvent = async () => {
    console.log("done participe");
  }

  return (
    <div className="container">
      <div className="row">
        {events.map((event) => (
          <div className=" col-md-3 col-sm-6 col-12  my-3 " key={event._id} >
            <div className=" event card" style={{ width: '18rem' }}>
              <Link to={`events/${event._id}`}>
                <img className="card-img-top" src={event.imageURL === "" ? "img/evenement.png" : event.imageURL} alt={event.imageURL} />
              </Link>
              <div className="card-body">
                <Link to={`events/${event._id}`} style={{ textDecoration: 'none', color: "black" }} >
                  <h5 className="card-title">{event.title}</h5>
                  {/* <p className="card-text"><BsFillCalendar2DateFill />  {event.club.nomClub}</p>
                  {console.log(event.club.nomClub)} */}
                  <p className="card-text"><BsFillCalendar2DateFill />  {event.date.substr(0, 10)}  {event.date.substr(11, 5)}</p>
                </Link>
                <div className="mt-3">
                  <button className="btn input-block-level btn-success form-control" onClick={()=>participeEvent(event._id)}> <IoMdAddCircle /> Participe </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Participe
