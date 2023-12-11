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
            <h1>This is a list of all the jobs I have added</h1>
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