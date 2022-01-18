import React, { useState, useEffect} from "react";
import ActivityService from '../../services/ActivityService';
import { useHistory } from 'react-router-dom';
// import axios from "axios";
import ClubService from "../../services/ClubService";

const AddActivity = () => {

  const history = useHistory();
  const initialActivity= {
    club: "",
    title: "",
    desc: "",
    date: "",
    place: "",
  }
  const [activity, setActivity] = useState(initialActivity);
  const [clubs, setClubs] = useState([]);
  const [selectValue, setSelectValue] = useState();

  const onInputChange = e => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const saveActivity = async (e) => {
    e.preventDefault();
    ActivityService.create(activity)
      .then(() => { history.push("/activity");})
      .catch(e => { console.log(e); });
  };

  var Currentdate = (new Date(new Date().getTime() - new Date().getTimezoneOffset() * 6000).toISOString()).substr(0,16) ;

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
      activity.club = res.data.response
    })
  };
  return (
    <div className="container">
      <div>
        <h1 className="text-center mb-5"> Add Activity</h1>
        <form className="d-flex align-items-center flex-column justify-content-center h-100  ">
          <div className="row col-6">
            <div className="col-12">
              <label> title </label>
              <input type="text" name="title" className="form-control" value={activity.title} onChange={onInputChange} />
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
          </div>
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
            <button type="submit" className="btn btn-success my-5" onClick={saveActivity}>Ajouter</button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default AddActivity;
