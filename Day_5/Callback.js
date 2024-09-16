async function API()
{
    try {
        const response= await fetch("https://66e527635cc7f9b6273c7026.mockapi.io/UserDetail");
    const data=await response.json();
  
    return  data;
    } catch (error) {
        console.log(error)
    }
    
}
API();


async function APIDATA() {
    const apidata=await API()
    const fl=apidata.filter((data)=>isActive)
    const mp=apidata.map((data)=>{  console.log(data)})  
}
APIDATA()