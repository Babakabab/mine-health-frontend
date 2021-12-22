import makeRequest from "../../Utils/makeRequest";

export const listVehicles = ()=> async ()=>{
  const response = await makeRequest({method:"get",path:"/vehicle/list"})
  return response &&response.data;

}
export const createVehicle =({name,surname,phone_nr,email,role_value})=>async()=>{
  const response = await makeRequest({body:{name,surname,phone_nr,email,role_value},method:"post",path:"/vehicle/create"});
  return response&&response.data;
}