import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import ActivityService from '../../services/ActivityService';
import ClubService from "../../services/ClubService";
// import './event.css'

const ActivityList = () => {

  const [activities, setActivity] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [selectValue, setSelectValue] = useState("all");

  useEffect(() => {
    getActivities();
    getClubs();
  }, []);

  const getClubs = async () => {
    ClubService.getAll()
    .then((res) => {
      setClubs(res.data.response);
    })
    .catch(e => { console.log(e); });
  }

  const handleDropdownChange = (e) => {
    console.log(e.target.value)
    setSelectValue(e.target.value);  
  }

  const getActivities = async () => {
    ActivityService.getAll()
      .then((res) => {
        setActivity(res.data.response);
      })
      .catch(e => { console.log(e); });
  }

  const deleteActivity = async (id) => {
    ActivityService.remove(id)
      .then(() => { getActivities(); })
      .catch(e => { console.log(e); });
  }

  const filterAct = activities.filter((activity) => {
    return (activity.club.nomClub === selectValue )
  })

  return (
    <div className="container">
      <Link className="btn btn-primary m-2 text-center" to={`/activity/add`}>Add avtivity</Link>
      <div className="card shadow mb-4">
      <div className="input-group">
              <select className='form-select form-select-lg mb-3' value={selectValue} onChange={handleDropdownChange}>
                <option value="all">--selected--</option>
                {
                  clubs.map(club => {
                    return (
                      <option key={club.nomClub}
                        value={club.nomClub}
                        id={club.nomClub}
                      >
                        {club.nomClub}
                      </option>
                    )
                  })
                }
              </select>
            </div>
        <div className="card-body">
          <table className="table table-striped">
            <tr><th>Club</th> <th>title</th><th>date</th> <th>place</th> <th>desc</th> </tr>
            <tbody >
              {
                (selectValue === "all" )
                  ?activities.map((activity) => (
                    <tr >
                      <td>{activity.club.nomClub }</td>
                      <td>{activity.title }</td>
                      <td>{activity.date.substr(0, 10)}  { activity.date.substr(11, 5) }</td>
                      <td>{ activity.place }</td>
                      <td>{ activity.desc }</td>
                      <td><Link className="btn btn-success" to={`/activity/edit/${activity._id}`}>Modifier</Link></td>
                      <td><p className="btn btn-danger" onClick={() => deleteActivity(activity._id)}>Supprimer</p></td>
                    </tr>
                  ))
                  :
                  (filterAct.length > 0 )
                    ?(filterAct.map((activity) => (
                            <tr >
                              <td>{activity.club.nomClub }</td>
                              <td>{activity.title }</td>
                              <td>{activity.date.substr(0, 10)}  { activity.date.substr(11, 5) }</td>
                              <td>{ activity.place }</td>
                              <td>{ activity.desc }</td>
                              <td><Link className="btn btn-success " to={`/activity/edit/${activity._id}`}>Modifier</Link></td>
                              <td><p className="btn btn-danger" onClick={() => deleteActivity(activity._id)}>Supprimer</p></td>
                            </tr>
                  )))
                  : <h3 className="m-5"> No Data Found  </h3>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )


}

export default ActivityList;