import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { useParams } from "react-router-dom";
import { setEnrollments, addEnrollment, deleteEnrollment } from "./reducer";

export default function Enrollments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);
  const isEnrolled = enrollments.some((e: any) => e.user === currentUser?._id);

  useEffect(() => {
    if (!cid) return;
    client.findUsersInCourse(cid).then((data) => dispatch(setEnrollments(data)));
  }, [cid]);

  const handleEnroll = async () => {
    const enrollment = await client.enroll(cid!, currentUser._id);
    dispatch(addEnrollment(enrollment));
  };

  const handleUnenroll = async () => {
    await client.unenroll(cid!, currentUser._id);
    dispatch(deleteEnrollment({ course: cid, user: currentUser._id }));
  };

  return (
    <div>
      <h3>Enrollments</h3>
      {isEnrolled ? (
        <button className="btn btn-danger" onClick={handleUnenroll}>
          Unenroll
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleEnroll}>
          Enroll
        </button>
      )}
      <ul>
        {enrollments.map((e: any) => (
          <li key={e.user}>{e.user}</li>
        ))}
      </ul>
    </div>
  );
}
