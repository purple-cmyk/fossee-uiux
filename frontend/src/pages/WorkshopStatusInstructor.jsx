export default function WorkshopStatusInstructor() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/workshop_status_instructor.html*/
    }
      <div className='workshop_status_instructor-container'>

    
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome ""</h1>
                <p>Your workshop related information will be shown here, Please navigate to <b>Workshop list</b> and
                    depending upon
                    your expertise and availability create a workshop by going to
                    <b>Create Workshop</b>.</p>
            </div>
        </div>
    
        <h3 className="text-center">The status of your workshops </h3>
        <br />

        {/*  Accepted View  */}
        <br />
        <div className="container">
            <h3 align="center" className="table-heading"><strong>Workshops Accepted</strong></h3>
            <table className="table table-striped table-responsive-sm">
                <thead>
                <tr>
                    <th>Coordinator Name</th>
                    <th>Institute</th>
                    <th>Workshop Name</th>
                    <th>Workshop Day</th>
                    <th>Status</th>
                </tr>
                </thead>
                
                    <tbody>
                    <tr>
                        
                            <td>
                                <a href="#">
                                    ""</a>
                            </td>
                            <td>""</td>
                            <td>""</td>
                            <td>""

                                
                                    <span className="material-icons datepicker btn"
                                          data-toggle="popinfo"
                                          title="Note"
                                          data-content="Click here to change date"
                                          onclick="changeDate()">event</span>
                                    <div className="" 
                                         title="Select New Date">
                                        <form method="post" action="#">
                                            <input type="text" placeholder="New date" name="new_date"
                                                   className=""/><br />
                                            
                                            <button className="btn btn-primary btn-xs" type="submit">Save</button>
                                        </form>
                                    </div>
                                
                            </td>
                            <td><span className="badge badge-success">""</span></td>
                        
                    </tr>
                    </tbody>

                

            </table>
        </div>


        {/*  Proposed View  */}
        <br />
        <div className="container">
            <h3 className="text-center table-heading"><strong>Workshops Proposed By Coordinators</strong>
            </h3>
            <table className="table table-striped table-responsive-sm">
                <thead>
                <tr>
                    <th>Coordinator Name</th>
                    <th>Institute</th>
                    <th>Workshop Name</th>
                    <th>Workshop Day</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                
                
                    <tbody>
                    <tr>
                        
                            <td>
                                <a href="#">
                                    ""</a>
                            </td>
                            <td>""</td>
                            <td>""</td>
                            <td>""</td>
                            <td><span className="badge badge-warning">""</span></td>
                            <td>
                                <a href="#">
                                    Accept
                                </a>
                            </td>
                        
                    </tr>
                    </tbody>

                
            </table>
        </div>
    


      </div>
    </>
  );
}
