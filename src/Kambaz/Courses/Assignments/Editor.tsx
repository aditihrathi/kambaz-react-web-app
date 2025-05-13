export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online.
        Submit a link to the landing page of your Web application running on Netlify.
         The landing page should be the Kambaz application with a link to the Lab exercises.
         Lab 1 should be the landing page of the Lab exercises and should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories
- The Kambaz application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group"> 
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="EXAMS">EXAMS</option>
            <option value="QUIZZES">QUIZZES</option>
            </select>
          </td>
        </tr>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as"> 
            <option value="PER">Percent</option>
            <option value="POINT">Points</option>
            </select>
          </td>
        </tr>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type"> 
            <option value="ONLINE">Online</option>
            <option value="NA">No Submission</option>
            <option value="IRL">In Person</option>
            </select>
          </td>
        </tr>
        <tr>
        <td align="right" valign="top">
          </td>
          <td>
          <label>Online Submission Options:</label><br/>

<input type="checkbox" name="sub-ops" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>

<input type="checkbox" name="sub-ops" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br/>

<input type="checkbox" name="sub-ops" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="sub-ops" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br/>

<input type="checkbox" name="sub-ops" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Upload</label><br/>

          </td>
        </tr>     
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <select id="wd-assign-to"> 
            <option value="ALL">Everyone</option>
            <option value="FAIL">Failing Students</option>
            </select>            
          </td>
        </tr>      
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
          <input id="wd-due-date" type="date" value="2023-10-27"/>         
          </td>
        </tr>
        <tr>
        <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2023-10-23"/>         
          </td>
          <td align="right" valign="top">
          <label htmlFor="wd-available-until">Available Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2023-10-30"/>         
          </td>  
          </tr>
        </table>
        <br />
        <button id="wd-save">Save</button> <button id="wd-cancel">Cancel</button>
    </div>
);}
