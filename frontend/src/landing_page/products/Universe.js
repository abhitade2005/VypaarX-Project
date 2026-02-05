import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The VypaarX Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" style={{maxWidth: "100%", height: "auto"}} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img style={{width:"50%", maxWidth: "100%", height: "auto"}} src="media/images/streakLogo.png" alt="Streak Logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" style={{maxWidth: "100%", height: "auto"}} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img style={{width:"50%", maxWidth: "100%", height: "auto"}}  src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse Logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img style={{width:"50%", maxWidth: "100%", height: "auto"}} src="media/images/goldenpiLogo.png" alt="Goldenpi Logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
                    <img style={{width:"50%", maxWidth: "100%", height: "auto"}} src="media/images/dittoLogo.png" alt="Ditto Logo" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>

                <button
                    className="p-2 btn btn-primary fs-5 mb-5 mx-auto"
                    style={{ width: "100%", maxWidth: "300px" }}
                     onClick={() => {
                        window.open("/signup");
                    }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;