import { useState, useEffect } from 'react'
import ActivityService from '../../services/ActivityService';
import { useHistory, useParams } from 'react-router-dom';

const EditActivity = () => {

  const history = useHistory();
  const initialActivity= {
    title: "",
    desc: "",
    date: "",
    place: "",
  }
  const { id } = useParams();
  const [activity, setActivity] = useState(initialActivity);

  const onInputChange = e => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };


  const updateActivity = async (e) => {
    e.preventDefault();
    ActivityService.update(activity._id,activity)
      .then(() => { history.push("/activity");})
      .catch(e => { console.log(e); });
  };

  useEffect(() => {
    getActivityById();
  }, []);

  const getActivityById = async () => {
    ActivityService.get(id)
    .then((res) => {
      setActivity(res.data.response);
    })
  }

  const getInitialType = () => {
    const type = "Training";
    return type;
  };

  // const [type, setType] = useState(getInitialType);

  // const typeChange = (e) => {
  //   setType(e.target.value);
  //   event.type = e.target.value
  // };

  var Currentdate = (new Date(new Date().getTime() - new Date().getTimezoneOffset() * 6000).toISOString()).substr(0,16) ;

  return (
    <div className="container">
    <div>
      <h1 className="text-center mb-5"> Edit Activity</h1>
      <form className="d-flex align-items-center flex-column justify-content-center h-100  ">
        <div className="row col-6">
          <div className="col-12">
            <label> title </label>
            <input type="text" name="title" className="form-control" value={activity.title} onChange={onInputChange} />
          </div>
          {/* <div className="col-6">
            <label>Place : </label>
            <input type="text" name="place" className="form-control" value={activity.place} onChange={onInputChange} />
          </div> */}
        </div>
        {/* <div className="row col-6 form-group">
          <div className="col-6">
            <label>type : </label>
            <select value={type} onChange={typeChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
              <option value="Training">Training</option>
              <option value="Event">Event</option>
              <option value="Competition">Competition</option>
            </select>
          </div>
        </div> */}
        <div className="col-sm-4 col-md-4 col-lg-6 form-group">
          <label>description</label>
          <textarea className="form-control" name="desc" id="desc" value={activity.desc} onChange={onInputChange} cols="30" rows="10"></textarea>
        </div>
        <div className="row col-sm-4 col-md-4 col-lg-6">
          <div className="col-sm-4 col-md-4 col-lg-6 form-group">
            <label>Date : </label>
            <input type="datetime-local" name="date" className="form-control" value={activity.date} onChange={onInputChange} min={Currentdate}/>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-6">
            <label>place : </label>
            <input type="text" name="place" className="form-control" value={activity.place} onChange={onInputChange} />
          </div>
        </div>
        <div className="mt-2 px-3">
          <button type="submit" className="btn btn-success my-5" onClick={updateActivity}>Ajouter</button>
        </div>
      </form>
    </div>
  </div >
  );
}

export default EditActivity;
