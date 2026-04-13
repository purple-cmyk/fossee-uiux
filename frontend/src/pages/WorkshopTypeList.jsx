export default function WorkshopTypeList() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/workshop_type_list.html*/
    }
      <div className='workshop_type_list-container'>

    <div className="container">
    <h2 className="text-center">Workshop Types</h2>
    <br />
    
        <a href="#">
        <button className="btn btn-md btn-primary float-right mb-3 mx-4">Add Workshop Type</button>
        </a>
        <br />
    
	<div className="container">
		<table className="table table-hover">
		  <thead>
		    <tr>
		      <th>Sr No</th>
		      <th>Workshop Name</th>
		      <th>Workshop Duration (Days)</th>
		      <th>Action</th>
		    </tr>
		  </thead>

		
		  <tbody>
		    <tr  >
		      <td scope="row" id="">""</td>
		      <td>""</td>
		      <td>""</td>
		      <td><a href="#" >View Workshop Details</a></td>
		    </tr>
		  </tbody>
		 
		</table>
	</div>

	    {/*  The Modal  */}
	    <div id="mailModal" className="modal">

	    {/*  Modal content  */}
	    <div className="modal-content">
		<span className="close">&times;</span>
		<p>Separate Multiple Email Id's using <strong> comma (,)</strong></p>
		<form action="" method="POST">
		  
		    <label > Email: </label>
		    <input name="email" type='email' multiple />
		    <input type='submit' />
		</form>
	    </div>
	    </div>

{/*  Page Navigation  */}
	<div className="container">

		<div className="Page-Nav" align="center">
		<nav aria-label="Page navigation">
		 	<ul className="pagination pagination-sm">
			  	<li className="page-item">
			      
					<a className="page-link" tabindex="-1" 
							href="#">Previous</a>
				
			    </li>
			    <li className="page-item">
			    <span className="current">
				Page "" of ""
					</span>
				</li>
			    <li className="page-item">
			    
					<a className="page-link" href="#">Next
					</a>
				
			    </li>
		  	</ul>
		</nav>
		</div>
	</div>
</div>

      </div>
    </>
  );
}
