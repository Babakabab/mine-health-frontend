import makeRequest from "../../Utils/makeRequest";

export const listCompanies = ()=> async ()=>{
  const response = await makeRequest({method:"get",path:"/company/list"})
  return response &&response.data;

}
export const createCompany =({name,surname,phone_nr,email,role_value})=>async()=>{
  const response = await makeRequest({body:{name,surname,phone_nr,email,role_value},method:"post",path:"/company/create"});
  return response&&response.data;
}