export default function WorkshopStatusCoordinator() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/workshop_status_coordinator.html*/
    }
      <div className='workshop_status_coordinator-container'>

    
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome ""</h1>
                <p>Information Related to your workshops will be shown here, you can also
                    propose a Workshop as per your available date in <strong>Propose Workshop tab</strong> .</p>
            </div>
        </div>
    
        <h3 className="text-center">The status of your workshops </h3>
        <br />

        {/*  Accepted View  */}

        <br />
        <div className="container">
            <h3 className="text-center table-heading"><strong>Workshops Accepted</strong></h3>
            <table className="table table-striped table-responsive-sm">
                <thead>
                <tr>
                    <th>Workshop Name</th>
                    <th>Instructor Name</th>
                    <th>Workshop Day</th>
                    <th>Status</th>
                </tr>
                </thead>

                
                    <tbody>
                    <tr>
                        
                            <td><a href="#" >""</a></td>
                            <td>""</td>
                            <td>""</td>
                            <td><span className="badge badge-success">""</span></td>
                        
                    </tr>
                    </tbody>
                

            </table>
        </div>

        {/*  Proposed View  */}

        <br />
        <div className="container">
            <h3 className="text-center table-heading"><strong>Workshops Proposed By Me</strong></h3>
            <table className="table table-striped table-responsive-sm">
                <thead>
                <tr>
                    <th>Workshop Name</th>
                    <th>Workshop Day</th>
                    <th>Status</th>
                </tr>
                </thead>
                
                    <tbody>
                    <tr>
                        
                            <td><a href="#" >""</a></td>
                            <td>""</td>
                            <td><span className="badge badge-warning">""</span></td>
                        
                    </tr>
                    </tbody>

                
            </table>
        </div>
    


      </div>
    </>
  );
}
