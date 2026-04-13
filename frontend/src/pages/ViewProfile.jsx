export default function ViewProfile() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/view_profile.html*/
    }
      <div className='view_profile-container'>


    <div className="container">
        
            <table className="table table-bordered">
                <tr>
                    <th><label htmlFor="id_first_name"><h5>First name:</h5></label></th>
                    <th><label htmlFor="id_first_name"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_last_name"><h5>Last name:</h5></label></th>
                    <th><label htmlFor="id_last_name"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_email"><h5>Email:</h5></label></th>
                    <th><label htmlFor="id_email"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_institute"><h5>Institute:</h5></label></th>
                    <th><label htmlFor="id_institute"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_phone_number"><h5>Phone Number:</h5></label></th>
                    <th><label htmlFor="id_phone_number"><h5>""</h5></label>
                    </th>
                </tr>
                <tr>
                    <th><label htmlFor="id_department"><h5>Department:</h5></label></th>
                    <th><label htmlFor="id_department"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_location"><h5>Location:</h5></label></th>
                    <th><label htmlFor="id_location"><h5>""</h5></label></th>
                </tr>
                <tr>
                    <th><label htmlFor="id_position"><h5>Position:</h5></label></th>
                    <th><label htmlFor="id_position"><h5>""</h5></label></th>
                </tr>
            </table>
            <br />

            <div className="container">
            <h2>Workshop Details</h2>
            <table className="table table-bordered">
            <tr>
                <th><label htmlFor="id_instructor_name">Instructor name</label></th>
                <th><label htmlFor="id_workshop_date">Workshop date</label></th>
                <th><label htmlFor="id_workshop_type">Workshop type</label></th>
            </tr>
            
                
                    <tr>
                        <td><label htmlFor="id_instructor_name">""
                        </label></td>
                        <td><label htmlFor="id_workshop_date">""</label>
                        </td>
                        <td><label htmlFor="id_workshop_type">""</label>
                        </td>
                    </tr>
                
                    <tr>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td><label htmlFor="id_workshop_date">""</label>
                        </td>
                        <td><label htmlFor="id_workshop_type">""</label>
                        </td>
                    </tr>
                
            
            </table>
            </div>
            <br /><br />
        
            <form action="" method="post">
              
                <div className="row justify-content-center form-group">
                    <div className="col-md-6">
                    <form action="" method="post">
                        <fieldset>
                            
                            
                                
                                    
                                        <div className="alert alert-dismissible alert-danger">
                                            <button type="button" className="close" data-dismiss="alert">
                                                <i className="fa fa-close"></i>
                                            </button>
                                            <strong>"" : ""</strong>
                                        </div>
                                    
                                
                                
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">
                                            <i className="fa fa-close"></i>
                                        </button>
                                        <strong>"" : ""</strong>
                                    </div>
                                
                            
                            <table className="table table-responsive-sm">
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                                <tr><td>""</td></tr>
                            </table>
                            <br />
                        </fieldset>
                        <button className="btn btn-success btn-lg" type="submit">
                            <i className="fa fa-pencil-square-o"></i>&nbsp;Update</button>
                        <a href="#">Cancel
                        </a>
                    </form>
                    </div>
                </div>
            </form>
        
    </div>

      </div>
    </>
  );
}
