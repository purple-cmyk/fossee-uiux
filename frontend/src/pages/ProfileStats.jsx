export default function ProfileStats() {
  return (
    <>{
     /*workshop_booking/statistics_app/templates/statistics_app/profile_stats.html*/
    }
      <div className='profile_stats-container'>

	<div className="container">
	 	<div className="row">
			<div className="col-md-6" align="left" >
				  <fieldset data-mini="true">
				    <label htmlFor="radio-1">Instructor Statistics </label>
				    <input type="radio" name="radio-1" id="radio-1" value="IP" />
				    <label htmlFor="radio-2">Coordinator Statistics</label>
				    <input type="radio" name="radio-1" id="radio-2" value="CP" />
				  </fieldset>
			</div>
			<br />
			<br />
			{/*  Instructor Data Table  */}
				<table className="table" id="instructor_data" >
					<thead>
						<tr>
							<th></th>
							<th>username</th>
							<th>Full Name</th>
							<th>Institute Name</th>
							<th>Phone Number</th>
							<th>Workshop Count</th>
						</tr>
					</thead>
					
					
						<tbody>
							<tr>
								<td>""</td>
								<td>""</td>
								<td>"" ""</td>
								<td>""</td>
								<td>""</td>
								<td>""</td>
							</tr>
						</tbody>
					
				</table>

			{/*  Coordinator Data Table  */}
				<table className="table" id="coordinator_data" >
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Institute Name</th>
							<th>Phone Number</th>
							<th>Registration Date</th>
							<th>Workshop Count</th>
						</tr>
					</thead>
					
					
						<tbody>
					
							<tr>
								<td>""</td>
								<td><a href="#">
								""</a></td>
								<td>""</td>
								<td>""</td>
								<td>""</td>
								<td>""</td>
							</tr>
					
						</tbody>
					
				</table>
		</div>
	</div>


      </div>
    </>
  );
}
