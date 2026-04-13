export default function EditWorkshopType() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/edit_workshop_type.html*/
    }
      <div className='edit_workshop_type-container'>

    <div className="container">
        <h2 className="text-center m-2">View / Edit Workshop Type</h2>
        <br />
        <form method="post" enctype="multipart/form-data">
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Workshop Name :</div>
                <div className="col text-left">
                    <div className="row">
                        <div className="col">""</div>
                    </div>
                    <div className="row m-1 text-danger">
                        <div className="col">""</div>
                    </div>
                </div>

            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Duration :</div>
                <div className="col text-left">
                    <div className="row">
                        <div className="col">""</div>
                    </div>
                    <div className="row m-1 text-muted">
                        <div className="col">""</div>
                    </div>
                    <div className="row m-1 text-danger">
                        <div className="col">""</div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Description :</div>
                <div className="col text-left">
                    <div className="row">
                        <div className="col">""</div>
                    </div>
                    <div className="row m-1 text-danger">
                        <div className="col">""</div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Terms and Conditions :</div>
                <div className="col text-left">
                    <div className="row">
                        <div className="col">""</div>
                    </div>
                    <div className="row m-1 text-danger">
                        <div className="col">""</div>
                    </div>
                </div>
            </div>

            <h2 className="text-center m-2">Attachments</h2>
            ""
            ""
            
                <div className="">
                    <div className="row">
                        <div className="col-11">
                            
                                <div className="col-6">""</div>
                            
                        </div>
                    
                    <div className="col-1">
                        <a href="#"><button className="btn btn-md btn-danger float-right" type="button">Delete</button></a>
                    </div>
                    
                    </div>

                </div>
                <hr />
            
            <div className="row my-3">
                <div className="col-12">
                    <button type="submit" className="btn btn-md btn-primary float-right m-3">Save</button>
                </div>
            </div>
        </form>
    </div>
    <br /><br /><br /><br />
    

      </div>
    </>
  );
}
