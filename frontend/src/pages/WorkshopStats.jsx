export default function WorkshopStats() {
  return (
    <>{
     /*workshop_booking/statistics_app/templates/statistics_app/workshop_stats.html*/
    }
      <div className='workshop_stats-container'>


<div className="container">
  <div className="row">
		<div className="col-md-6" align="left" >
			  <fieldset data-mini="true">
			    <label htmlFor="radio-1">Monthly Count </label>
			    <input type="radio" name="radio-1" id="radio-1" value="NWPM" />
			    <label htmlFor="radio-2">Overall Count</label>
			    <input type="radio" name="radio-1" id="radio-2" value="OWC" />
			    <label htmlFor="radio-3">India Map</label>
			    <input type="radio" name="radio-1" id="radio-3" value="MOIN" />
			  </fieldset>
		</div>
	

	
	<div  align="right" className="col-md-6">
		<form method="POST" >
			
			<div className="form-group">
				<label htmlFor="from">From</label>
				<input type="text" id="from" name="from" />
				<label htmlFor="to">to</label>
				<input type="text" id="to" name="to" />
				<button className="btn btn-warning btn-sm" type="submit" name="Download" value="Download">Download</button>
				<button className="btn btn-info btn-sm" type="submit" name="View" value="View">View</button>
			</div>
	    </form>

	    
		<ul className="messages">
		    
		    	<div className="">
				    <li  className=""> ""
				    </li>
			    </div>
		    
		</ul>
		

	</div>
	<br />
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Coordinator Name</th>
					<th>Institute Name</th>
					<th>Instructor Name</th>
					<th>Workshop Name</th>
					<th>Workshop Date</th>
					<th>Requested/Proposed By</th>
				</tr>
			</thead>
			
			
				
						<tbody>
							<tr>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>Coordinator</td>
							</tr>
						</tbody>
				
						<tbody>
							<tr>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>""</td>
							<td>Instructor</td>
							</tr>
						</tbody>
				
			
		</table>
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
	
		<div className="jumbotron">
			<h2>Permission to View Upcoming Workshops is set to false, please set it to true in settings.py</h2>
		</div>
	
	</div>


<div className="row">
	<br />
	<div className="col-md-12 ">
		<br />
		<canvas id="myChartPie" ></canvas>
			
		
		<div id="visualization"  ></div>

	</div>
</div>
</div>
<br />

      </div>
    </>
  );
}
