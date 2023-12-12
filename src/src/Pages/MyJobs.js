import Nbar from './Nbar';
import useUser from '../hooks/useUser';
import { useState, useEffect } from 'react';


const MyJobs = () => {
    const[jobs, setJobs] = useState([])    
    const {user} = useUser();  // is the user logged in
    console.log(user?.uid)

    const GetUserJobs = async () => {
        const response = await fetch (`http://localhost:3001/api/ads/?uid=${user?.uid}`)
        const UserJobs = await response.json()
        console.log(UserJobs)
        setJobs(UserJobs)
        }
    useEffect(() => {
        if(user){
            GetUserJobs()
        } 
    }, [user])
    return ( 
        <>
              <div><Nbar/></div>
           
            
            <br /> <br />
              {user
        ? <h2>My Jobs</h2>
        : <h2>You must be logged in to view this page.
            <br />
            <a href="/login"><button className="btn bg-black btn-dark mt-3" >Log In</button></a></h2>}
            {jobs.length ? (
                <ul>
                    {jobs.map (job => (
                        <li>{job.Desc}</li>
                    ))}
                </ul>
            ):(
                <h2>You don't have jobs, click on link to add</h2>  

            )}
        </>
     );
}
 
export default MyJobs;