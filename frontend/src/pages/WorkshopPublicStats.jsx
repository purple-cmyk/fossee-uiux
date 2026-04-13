export default function WorkshopPublicStats() {
  return (
    <>{
     /*workshop_booking/statistics_app/templates/statistics_app/workshop_public_stats.html*/
    }
      <div className='workshop_public_stats-container'>

<div className="container-fluid">
    <div className="row">
        <div className="col-md-3">
            <form method="GET">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-8">
                                <h3><u>Filters</u></h3>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <i className="fa fa-times"></i>&nbsp;Clear
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>From date: ""</div>
                        <div>To date: ""</div>
                        <div>Workshop: ""</div>
                        <div>State: ""</div>
                        <div>"": ""</div>
                        
                        <div>"": ""</div>
                        
                        <br />
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-success">
                                    <i className="fa fa-eye"></i>&nbsp;View
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-info" name="download" value="download">
                                    <i className="fa fa-download"></i>&nbsp;Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="col">
            <div className="row">
                <div className="col-md-6">
                    
                </div>
                <div className="col-md-3">
                    <button className="btn btn-info" id="state_graph">
                        <i className="fa fa-bar-chart"></i>&nbsp;State chart
                    </button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-info" id="type_graph">
                        <i className="fa fa-bar-chart"></i>&nbsp;Workshops chart
                    </button>
                </div>
            </div>
            <table className="table table-responsive-sm">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Coordinator Name</th>
                        <th>Institute Name</th>
                        <th>Instructor Name</th>
                        <th>Workshop Name</th>
                        <th>Workshop Date</th>
                    </tr>
                </thead>
                
                
                    <tbody>
                        <tr>
                            <td>""</td>
                            <td>""</td>
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

{/*  The Modal  */}
<div id="dialog" title="Workshops Statistics">
    <canvas id="myChart"></canvas>
</div>




      </div>
    </>
  );
}
