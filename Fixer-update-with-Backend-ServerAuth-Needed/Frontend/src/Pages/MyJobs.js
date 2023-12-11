import Nbar from './Nbar';
import useUser from '../hooks/useUser';

const MyJobs = () => {

    const {user, isLoading} = useUser();  // is the user logged in
    return ( 
        <>


              <div><Nbar/></div>
              <br /> <br />
        {user
        ? <h2>This is The page to view jobs you have posted.</h2>
        : <h2>You must be logged in to view this page.
            <br />
            <a href="/login"><button className="btn bg-black btn-dark mt-3" >Log In</button></a></h2>}
    


        </>
     );
}
 
export default MyJobs;