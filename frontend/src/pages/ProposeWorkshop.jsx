export default function ProposeWorkshop() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/propose_workshop.html*/
    }
      <div className='propose_workshop-container'>

    

    <div className="container" align="center">
        <div className="alert alert-info">
            Note: Before proposing the workshop, please check about the workshop in the
            <strong>Workshop Types</strong> section
        </div>
        <br /><br />
        <div className="col-md-6 col-md-offset-6">
            <div className="card border-primary">
                <div className="card-header">
                    <h3>Propose Workshop</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <form method="post">
                            
                            <br/>
                            ""
                            <br />
                            ""
                            <br />
                            "" I accept the
                            <a href="#">
                                terms and conditions
                            </a>
                            <br />
                            
                                <br />
                                <div >
                                    <h5 >Errors</h5>
                                    ""
                                </div>
                            
                            <br />
                            <button className="btn btn-success" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br />

    </div>
    {/*  Modal  */}
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Terms and Conditions</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                </div>
            </div>
        </div>
    </div>

      </div>
    </>
  );
}
