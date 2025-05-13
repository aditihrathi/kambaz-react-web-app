import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">

          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/computerscience.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Algorithm.jpg" width={200} />
            <div>
              <h5> CS1800 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learn how to use algorithms to solve problems!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/3600/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/math.jpg" width={200} />
            <div>
              <h5> Math3600 Linear Algebra </h5>
              <p className="wd-dashboard-course-title">
                Basics of Machine Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <Link to="/Kambaz/Courses/2410/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/proglang.jpg" width={200} />
            <div>
              <h5> CS2410 Programming Languages </h5>
              <p className="wd-dashboard-course-title">
                Understand how to create your own language!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/7126/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ling.jpg" width={200} />
            <div>
              <h5> ENG7126 Media & Politics </h5>
              <p className="wd-dashboard-course-title">
                How does media and its stakeholders impact the general public's views?  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/6230/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/orgo.jpg" width={200} />
            <div>
              <h5> CHEM6230 Organic Chemistry </h5>
              <p className="wd-dashboard-course-title">
                Further understanding of organic chemistry  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/3245/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/phil.jpg" width={200} />
            <div>
              <h5> PHIL3245 Tech & Human Values </h5>
              <p className="wd-dashboard-course-title">
                How does technology impact human evolution, and vice versa?  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
);}
