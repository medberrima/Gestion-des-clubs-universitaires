import React, { useState, useEffect} from "react";
import EventService from '../../services/EventService';
import { useHistory } from 'react-router-dom';
import ClubService from "../../services/ClubService";
// import axios from "axios";

const AddEvent = () => {

  const history = useHistory();
  const initialEvent = {
    title: "",
    imageURL: "",
    type: "",
    description: "",
    place: "",
    date: "",
    duration: "",
    etat: "à venir",
    club:{}
  }
  const [event, setEvent] = useState(initialEvent);
  const [clubs, setClubs] = useState([]);
  const [selectValue, setSelectValue] = useState();

  const onInputChange = e => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const saveEvent = async (e) => {
    console.log(event)
    e.preventDefault();
    EventService.create(event)
      .then(() => { history.push("/events");})
      .catch(e => { console.log(e); });
  };

  const getInitialType = () => {
    const type = "Training";
    return type;
  };

  const [type, setType] = useState(getInitialType);

  const typeChange = (e) => {
    setType(e.target.value);
    console.log(type) ;
    event.type = e.target.value
  };

  var Currentdate = (new Date(new Date().getTime() - new Date().getTimezoneOffset() * 6000).toISOString()).substr(0,16) ;

  // 2022-01-05T20:32
  console.log(Currentdate)

  useEffect(() => { getClubs(); }, []);

  const getClubs = async () => {
    ClubService.getAll()
    .then((res) => {
      console.log(res.data.response);
      setClubs(res.data.response);
      console.log(clubs);
    })
    .catch(e => { console.log(e); });
  }

  const clubChange = (e) => {
    ClubService.get(e.target.value)
    .then((res) => {
      event.club = res.data.response
    })
  };


  return (
    <div className="container">
      <div>
        <h1 className="text-center mb-5"> Add Event</h1>
        <form className="d-flex align-items-center flex-column justify-content-center h-100  ">
          {/* <div className="col-sm-2 col-md-4 col-lg-6">
            <div className="form-group my-3" className="text-center align-items-center">
              <label htmlFor="exampleFormControlFile1" >Image </label>
              <input type="file" accept="image/x-png,image/gif,image/jpeg" className="form-control-file" id="exampleFormControlFile1" />
            </div>
          </div> */}
          <div className="row col-6">
            <div className="col-6">
              <label> title </label>
              <input type="text" name="title" className="form-control" value={event.title} onChange={onInputChange} />
            </div>
            <div className="col-6">
              <label>Place : </label>
              <input type="text" name="place" className="form-control" value={event.place} onChange={onInputChange} />
            </div>
          </div>
          <div className="row col-6 form-group">
            <div className="col-6">
              <label>Clubs : </label>
              <select value={selectValue} onChange={clubChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                <option value="select">- Select Club - </option>
                {clubs.map(club=> <option value={club._id} key={club._id}> {club.nomClub}</option>)}
              </select>
            </div>
            <div className="col-6">
              <label> imageURL </label>
              <input type="text" name="imageURL" className="form-control" value={event.imageURL} onChange={onInputChange} />
            </div>
          </div>
          <div className="row col-6 form-group">
            <div className="col-6">
              <label>type : </label>
              <select value={type} onChange={typeChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
                <option value="Training">- Select Type -</option>
                <option value="Training">Training</option>
                <option value="Event">Event</option>
                <option value="Competition">Competition</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-6 form-group">
            <label>description</label>
            <textarea className="form-control" name="description" id="description" value={event.description} onChange={onInputChange} cols="30" rows="10"></textarea>
          </div>
          <div className="row col-sm-4 col-md-4 col-lg-6">
            <div className="col-sm-4 col-md-4 col-lg-6 form-group">
              <label>Date : </label>
              <input type="datetime-local" name="date" className="form-control" value={event.date} onChange={onInputChange}  min={Currentdate}/>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-6">
              <label>Duration : </label>
              <input type="text" name="duration" className="form-control" value={event.duration} onChange={onInputChange} />
            </div>
          </div>
          <div className="mt-2 px-3">
            <button type="submit" className="btn btn-success my-5" onClick={saveEvent}>Ajouter</button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default AddEvent;
