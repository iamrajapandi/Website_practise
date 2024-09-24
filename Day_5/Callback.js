async function API()
{
    try {
        const response= await fetch("https://66e527635cc7f9b6273c7026.mockapi.io/UserDetail");
        const data=await response.json();
        console.log(data);
  
    return  data;
    } catch (error) {
        console.log(error)
    }
    
}
API();


// async function APIDATA() {
//     const apidata=await API()
//     // const fl=apidata.filter((data)=>isActive)
//     const mp=apidata.map((data)=>{  console.log(data)})  
// }
// APIDATA();


//  function pro()
// {
//     return new Promise((resolve,reject)=>{
//         const x=true;
//         setTimeout(()=>{
//             if(x){
//                 console.log("succes");
//             }
//             else{
                
//                 console.log("error");
//             }
//         },3000)
//     })
// }
// async function  datax() {
//     try {
//         const response=await pro()
//         console.log(response)
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }
// // datax(); 

// pro().then(data=>{console.log(data)}).catch(e=>{console.log(e)})
