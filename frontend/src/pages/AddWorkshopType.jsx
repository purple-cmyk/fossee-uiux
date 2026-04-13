export default function AddWorkshopType() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/add_workshop_type.html*/
    }
      <div className='add_workshop_type-container'>

    <div className="container">
        <h2 className="text-center m-2">New Workshop Type</h2>
        <br />
        <form method="post">
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Workshop Name :</div>
                <div className="col text-left">
                    <div className="row"><div className="col">""</div></div>
                    <div className="row m-1 text-danger"><div className="col">""</div></div>
                </div>

            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Duration :</div>
                <div className="col text-left">
                    <div className="row"><div className="col">""</div></div>
                    <div className="row m-1 text-muted"><div className="col">""</div></div>
                    <div className="row m-1 text-danger"><div className="col">""</div></div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Description :</div>
                <div className="col text-left">
                    <div className="row"><div className="col">""</div></div>
                    <div className="row m-1 text-danger"><div className="col">""</div></div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3 font-weight-bold">Terms and Conditions :</div>
                <div className="col text-left">
                    <div className="row"><div className="col">""</div></div>
                    <div className="row m-1 text-danger"><div className="col">""</div></div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-12">
                    <button type="submit" className="btn btn-md btn-primary float-right m-3">Create</button>
                </div>
            </div>
        </form>
    </div>

      </div>
    </>
  );
}
