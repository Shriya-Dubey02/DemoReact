import React, { useEffect, useState } from 'react'
// Custom Hooks : Always start with use
function useInternet() {
    // navigator returns boolean
   const[online,setOnline]= useState(navigator.onLine);
   
   const setOnlineStatus=()=>{
    setOnline(true);
   }

   const setOfflineStatus=()=>{
    setOnline(false);
   }
   useEffect(()=>{

    
    window.addEventListener("online",setOnlineStatus)
    window.addEventListener("offline",setOfflineStatus)
   
    // console.log("Called",online)
    // cleanup function code
    return ()=>{
        window.removeEventListener("online",setOnlineStatus)
        window.removeEventListener("offline",setOfflineStatus)
    }

   },[online])

  return online
    // does not return html it returns booleans
    
  
}

export default useInternet
