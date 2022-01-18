import http from "../http-common";

const getAll = () => { return http.get("/activity");};

const get = id => { return http.get(`/activity/${id}`);};

const create = data => { return http.post("/activity", data);};

const update = (id, data) => { return http.put(`/activity/${id}`, data);};

const remove = id => { return http.delete(`/activity/${id}`);};

export default { getAll, get, create, update, remove };