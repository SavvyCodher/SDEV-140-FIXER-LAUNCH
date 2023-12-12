const AdsList = ({ ads }) => {
    return (
      <div className="ads-list">
        {ads.map(ad => (
          <div className="ad-preview" key={ad.UserId} >
            <h2>{ ad.Desc}</h2>
            <p>Written by { ad.ServiceRequest }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default AdsList;