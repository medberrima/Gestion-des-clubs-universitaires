import http from "../http-common";

const getAll = () => { return http.get("/club");};

const get = id => { return http.get(`/club/${id}`);};

const create = data => { return http.post("/club", data);};

const update = (id, data) => { return http.put(`/club/${id}`, data);};

const remove = id => { return http.delete(`/club/${id}`);};

export default { getAll, get, create, update, remove };