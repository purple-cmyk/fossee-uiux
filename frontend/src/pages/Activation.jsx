export default function Activation() {
  return (
    <>{
     /*workshop_booking/workshop_app/templates/workshop_app/activation.html*/
    }
      <div className='activation-container'>

    
        <div className="container">
            <div className="jumbotron">
                <p> Your email is already verified, Click
                    <a href="#">here</a>
                </p>
            </div>
        </div>
    
        
        <div className="container">
            <div className="jumbotron">
                <p> Your activation has expired please register again</p>
            </div>
        </div>
    
        <div className="container">
            <div className="jumbotron">
                <p> Your account has been activated. Click
                    <a href="#">here</a>
                </p>
            </div>
        </div>
    
        

        <div className="container">
            <div className="jumbotron">
                <h1>Activation Awaiting</h1>
                <p>The Activation Link has been sent to your email. The link expires in <strong>24hours</strong> from
                    the date of registration. You will be logged out automatically
                </p>
            </div>
        </div>
    

      </div>
    </>
  );
}
