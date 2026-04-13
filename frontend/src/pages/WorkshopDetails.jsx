export default function WorkshopDetails() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/workshop_details.html*/
    }
      <div className='workshop_details-container'>

    <div className="container">
        <table className="table table-bordered">
            <tr>
                <th><label htmlFor="id_first_name">Workshop Type :</label></th>
                <td><label htmlFor="id_first_name"><a
                        href="#">""</a></label>
                </td>
            </tr>
            <tr>
                <th><label htmlFor="id_last_name">Date :</label></th>
                <td><label htmlFor="id_last_name">""</label></td>
            </tr>
            <tr>
                <th><label htmlFor="id_email">Coordinator :</label></th>
                <td><label htmlFor="id_email">""</label>
                </td>
            </tr>
            
                <tr>
                    <th><label htmlFor="id_institute">Status :</label></th>
                    <td><span className="badge badge-success">""</span></td>
                </tr>
                <tr>
                    <th><label htmlFor="id_phone_number">Instructor :</label></th>
                    <td><label htmlFor="id_email">""</label>
                    </td>
                </tr>
            
                <tr>
                    <th><label htmlFor="id_institute">Status :</label></th>
                    <td><span className="badge badge-warning">""</span></td>
                </tr>
            
        </table>
        <br />
        <div className="container">
            <div className="card mt-2 mb-5">
                <form method="post">
                    <div className="card-header">
                        <div className="row">
                            <div className="mx-3 font-weight-bold">Post a comment</div>
                            
                                <div className="ml-5">"" Public</div>
                                <div className="ml-1 text-muted">(Non-public comments are visible only to instructors)</div>
                            
                        </div>
                    </div>
                    <div className="card-body">
                        ""
                    </div>
                    <button type="submit" className="float-right btn btn-primary btn-md m-2">Post</button>
                </form>
            </div>
            <br /><br />
            <h2 className="text-center">Comments</h2>
            <br />
            
                <div className="card my-2">
                    <div className="card-header">
                        <div className="row">
                            <div className="ml-3 font-weight-bold"><a
                                    href="#">""</a></div>
                            
                                <div className="ml-1"><span className="badge badge-dark">Hidden</span></div>
                            
                            <div className="ml-3 text-muted">""</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>""</p>
                    </div>
                </div>
            
        </div>
    </div>


      </div>
    </>
  );
}
