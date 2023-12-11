import { useEffect, useState } from "react";
import AdsList from "./AdsList";

const AllJobs=() => {
    const [ads,setAds]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:3001/api/ads/')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setAds(data);
            });
    },[]);
    
    return (
        <>
        <div className="alljobs">
            {ads && <AdsList ads={ads} />}
        </div>
       <div> <AllJobs /></div> 
       </>
    );

}

export default AllJobs; 