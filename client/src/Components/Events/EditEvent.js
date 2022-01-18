import { useState, useEffect } from 'react'
import EventService from '../../services/EventService';
import { useHistory, useParams } from 'react-router-dom';

const EditEvent = () => {

  const history = useHistory();
  let initialEvent = {
    title: "",
    imageURL: "",
    type: "",
    description: "",
    place: "",
    date: "",
    duration: "",
    etat: "à venir"
  }
  const { id } = useParams();
  const [event, setEvent] = useState(initialEvent);

  const onInputChange = e => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };


  const updateEvent = async (e) => {
    e.preventDefault();
    EventService.update(event._id,event)
      .then(() => { history.push("/events");})
      .catch(e => { console.log(e); });
  };

  useEffect(() => {
    getEventById();
  }, []);

  const getEventById = async () => {
    EventService.get(id)
    .then((res) => {
      setEvent(res.data.response);
    })
  }

  const getInitialType = () => {
    const type = "Training";
    return type;
  };

  const [type, setType] = useState(getInitialType);

  const typeChange = (e) => {
    setType(e.target.value);
    event.type = e.target.value
  };

  var Currentdate = (new Date(new Date().getTime() - new Date().getTimezoneOffset() * 6000).toISOString()).substr(0,16) ;

  return (
    <div className="container">
    <div>
      <h1 className="text-center mb-5"> Edit Event</h1>
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
            <label>type : </label>
            <select value={type} onChange={typeChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
              <option value="Training">Training</option>
              <option value="Event">Event</option>
              <option value="Competition">Competition</option>
            </select>
          </div>
          <div className="col-6">
              <label> imageURL </label>
              <input type="text" name="imageURL" className="form-control" value={event.imageURL} onChange={onInputChange} />
            </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-6 form-group">
          <label>description</label>
          <textarea className="form-control" name="description" id="description" value={event.description} onChange={onInputChange} cols="30" rows="10"></textarea>
        </div>
        <div className="row col-sm-4 col-md-4 col-lg-6">
          <div className="col-sm-4 col-md-4 col-lg-6 form-group">
            <label>Date : </label>
            <input type="datetime-local" name="date" className="form-control" value={event.date} onChange={onInputChange} min={Currentdate}/>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-6">
            <label>Duration : </label>
            <input type="text" name="duration" className="form-control" value={event.duration} onChange={onInputChange} />
          </div>
        </div>
        <div className="mt-2 px-3">
          <button type="submit" className="btn btn-success my-5" onClick={updateEvent}>Edit</button>
        </div>
      </form>
    </div>
  </div >
  );
}

export default EditEvent;
