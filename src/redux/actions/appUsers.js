import makeRequest from "../../Utils/makeRequest";

export const listAppUsers = ()=> async ()=>{
  const response = await makeRequest({method:"get",path:"/user/list"})
  return response &&response.data;

}
export const createAppUser =({name,surname,phone_nr,email,role_value})=>async()=>{
  const response = await makeRequest({body:{name,surname,phone_nr,email,role_value},method:"post",path:"/user/create"});
  return response&&response.data;
}