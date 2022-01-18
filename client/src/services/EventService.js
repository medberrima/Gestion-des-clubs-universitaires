import http from "../http-common";

const getAll = () => { return http.get("/evenement");};

const get = id => { return http.get(`/evenement/${id}`);};

const create = data => { return http.post("/evenement", data);};

const update = (id, data) => { return http.put(`/evenement/${id}`, data);};

const remove = id => { return http.delete(`/evenement/${id}`);};

export default { getAll, get, create, update, remove };