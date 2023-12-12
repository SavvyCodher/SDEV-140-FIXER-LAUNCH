import moment from "moment";
const AdsList = ({ ads }) => {
    return (
      <div className="ads-list">
        
        <div className="card-group ">
        {ads.map(ad => (
          
          
            <div className="card text-center shadow m-2" key={ad.UserId} >

              <div className="card-body text-dark">
              
              
                      <h4 className="card-title">{ad.ServiceRequest}</h4>

                      <p className="card-text text-secondary">
                          {ad.Desc}
                      </p>

                      <p className="card-text text-secondary">
                      {moment(ad.DateNeeded).format('MMM DD, YYYY')}

                      </p>
                      <p className="card-text text-secondary">
                        {ad.ZipCode}
                      </p>

              </div>
            </div>
          
          
        ))}
        </div>
      </div>
    );
  }
   
  export default AdsList;


