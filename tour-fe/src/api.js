import axios from "axios";
axios.defaults.withCredentials = true

// const instance = axios.create({ 
//   baseURL: 'http://localhost:3006',
//   crossdomain: true,
// });
const instance = axios.create({ baseURL: 'http://api-tour.julypenguin.tw' });
// const instance = axios.create({ baseURL: 'http://localhost:3006' });

export const createPost = (values) => instance.post("/apiposts", values);
export const getPost = id => instance.get("/apiposts/" + id);
export const getPostList = () => instance.get("/apiposts");
export const deletePost = (id)=> instance.delete("/apiposts/" + id);
export const updatePost = (id, value) => instance.put("/apiposts/" + id, value);

export const getMaps = (id) => instance.get(`/apimaps/${id}`);
export const createMap = (id, values) => instance.post(`/apimaps/${id}`, values);

export const register = user => instance.post("/apiregister", user);
export const login = user => instance.post("/apilogin", user);

export const logout = () => instance.get("/apilogout");

export const getUser = () => instance.get("/apiuserInfo");

export const createCategory = (values) => instance.post("/apicategory", values);
export const getCategoryList = () => instance.get("/apicategory");

