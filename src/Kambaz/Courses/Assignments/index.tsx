export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <button id="wd-add-quiz">+ Quiz</button>
      <button id="wd-add-exam">+ Exam</button> 
      <button id="wd-add-project">+ Project</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/1234A1"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>
           <br></br> Multiple Modules | <strong>Not available until</strong> May 6 @ 12:00 AM
            <br></br> <strong>Due</strong> May 13 @ 11:59 PM | 100 Points
          </li>
        <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/1234A2"
             className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
          <br></br> Multiple Modules | <strong>Not available until</strong> May 13 @ 12:00 AM
            <br></br> <strong>Due</strong> May 20 @ 11:59 PM | 100 Points</li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/1234A3"
             className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a> 
          <br></br> Multiple Modules | <strong>Not available until</strong> May 20 @ 12:00 AM
            <br></br> <strong>Due</strong> May 27 @ 11:59 PM | 100 Points</li>
      </ul>
      <h3 id="wd-quiz-title">
        QUIZZES 10% of Total <button>+</button> </h3>
      <h3 id="wd-exam-title">
        EXAMS 20% of Total <button>+</button> </h3>
      <h3 id="wd-quiz-title">
        PROJECT 30% of Total <button>+</button> </h3>
    </div>
);}
