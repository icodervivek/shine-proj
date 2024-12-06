import { Link } from "react-router-dom";

const Headnavs = () => {
  return (
    <div className="container">
      <div className="row g-2 bg-white rounded p-3 mt-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <Link to="/">
            <button type="button" className="btn btn-primary w-100 rounded">
              Dashboard
            </button>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <Link to="/students/details">
            <button type="button" className="btn btn-primary w-100 rounded">
              Student Details
            </button>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <button type="button" className="btn btn-primary w-100 rounded">
            Staff Details
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <button type="button" className="btn btn-primary w-100 rounded">
            Fees Payment
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <button type="button" className="btn btn-primary w-100 rounded">
            Examinations
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
          <Link to="/admisionform">
            <button type="button" className="btn btn-primary w-100 rounded">
              Admissions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headnavs;
