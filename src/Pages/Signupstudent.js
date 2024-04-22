/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseUrl } from './BaseUrl'
//mport { ToastContainer, toast } from "react-toastify";

function Signupstudent() {
  const navigate = useNavigate()
  useEffect(()=>{getCourseData()},[])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [grade, setGrade] = useState("")
  const [areaOfStudy, setAreaOfStudy] = useState("")
  //const [skills, setSkills] = useState([])
  const [language, setLanguage] = useState("")
  const [validation, setValidation] = useState(false)

  

  const postStudentData = () => {
    if (name !== "" & email !== "" & password !== "" & grade !== "" & areaOfStudy !== ""  & language !== ""&email.includes("@")&email.includes(".com")) {
      const item = {
        name: name,
        email: email,
        password: password,
        grade: grade,
        areaOfStudy: areaOfStudy,
       // skills: skills,
        language: language,
        type: "student",
        profilePhoto: "",
      }
      axios.post(baseUrl + "addstudents", item).then(() => navigate("/"))
    } else {
      setValidation(true)
    }
  }

  const [courseData, setCourseData] = useState([])


  const getCourseData = () => {
    axios.get(baseUrl + "addcourse").then((res) => setCourseData(res.data.data))
  }
  return (
    <div>
      <div style={{ minHeight: "100vh", width: "100%", display: "flex", flexWrap:"wrap" }}>
        <div className='lgnd1'
          style={{
            height: "100vh",
            width: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft: "5%"
          }}
        >
          <div className='lgnd1' style={{ height: "97vh", width: "70%" }}>

            <label
              style={{
                fontSize: 30,
                fontWeight: "bolder",
                letterSpacing: "1px",

              }}
            >
              Signup as a student
            </label>

            <br />
            <br />
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <input onChange={(e) => setName(e.target.value)} placeholder="Full Name" style={{ width: "100%", height: 40,border:validation===true&name===""?"1px solid red":"1px solid grey" }} />
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly", }}>

              <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" style={{ width: "100%", height: 40, border:validation===true&email===""?"1px solid red":"1px solid grey"}} />
              <label style={{fontSize:12, color:"red", display:(!email.includes("@")||!email.includes(".com"))&validation?"block":"none"}}>*Invalid Email</label>

            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: "100%", height: 40,border:validation===true&password===""?"1px solid red":"1px solid grey" }} />
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setGrade(e.target.value)} style={{ width: "100%", height: 40,border:validation===true&grade===""?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Knowledge Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advance</option>
                <option>Fluent</option>
              </select>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>

              <select onChange={(e) => setAreaOfStudy(e.target.value)} style={{ width: "100%", height: 40,border:validation===true&areaOfStudy===""?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Class</option>
                <option>1st class</option>
                <option>2nd class</option>
                <option>3rd class</option>
                <option>4th class</option>
                <option>5th class</option>
                <option>6th class</option>
                <option>7th class</option>
                <option>8th class</option>
                <option>9th class</option>
                <option>10th class</option>
                <option>12th/Diploma</option>
                
                <option>B-Tech</option>
                
                <option>others</option>
              </select>
            </div>
            {/*<div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setSkills([...skills,e.target.value])} style={{ width: "100%", height: 40,border:validation===true&skills.length<1?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Skills</option>
                {courseData.map((i)=>
                <option>{i.courseName}</option>
                )}
 

              </select>
    
                </div>
            <div style={{height:10, width:"100%", display:"flex", alignItems:"center"}}>
              {skills.map((i)=><label style={{marginLeft:10}}>{i},</label>)}
                </div>  ...............
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setLanguage(e.target.value)} style={{ width: "100%", height: 40, border:validation===true&language===""?"1px solid red":"1px solid grey"}}>
                <option selected disabled>Select Subjects</option>
                <option>Java</option>
                  <option>Python</option>
                  <option>C++</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JavaScript</option>


              </select>
            </div>
            <br />
            <button onClick={() => { postStudentData() }} style={{ width: "100%", height: 40, borderRadius: 5, color: "white", backgroundColor: "black", border: "none" }}>Create Account</button><br /><br />
            <label>Already have an account? <span onClick={() => navigate("/")} style={{ color: "#8b5fb3" }}>Login</span></label>
          </div>
        </div>
        <div className='lgnd1'
          style={{ height: "100vh", width: "50%", }}>
          
        </div>
      </div>
    </div>
  );
}
*/

//export default Signupstudent;









import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseUrl } from './BaseUrl'
import { ToastContainer, toast } from "react-toastify";

function Signupstudent() {
  const navigate = useNavigate()
  useEffect(()=>{getCourseData()},[])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [grade, setGrade] = useState("")
  const [areaOfStudy, setAreaOfStudy] = useState("")
  const [skills, setSkills] = useState([])
  const [language, setLanguage] = useState("")
  const [validation, setValidation] = useState(false)

  

  const postStudentData = () => {
    if (name !== "" & email !== "" & password !== "" & grade !== "" & areaOfStudy !== "" & skills !== "" & language !== ""&email.includes("@")&email.includes(".com")) {
      const item = {
        name: name,
        email: email,
        password: password,
        grade: grade,
        areaOfStudy: areaOfStudy,
        skills: skills,
        language: language,
        type: "student",
        profilePhoto: "",
      }
      //http://localhost:5001/api/addstudents
      axios.post(baseUrl + "addstudents", item).then(() => navigate("/"))
    } else {
      setValidation(true)
    }
  }

  const [courseData, setCourseData] = useState([])


  const getCourseData = () => {
    axios.get(baseUrl + "addcourse").then((res) => setCourseData(res.data.data))
  }
  return (
    <div>
      <div style={{ minHeight: "100vh", width: "100%", display: "flex", flexWrap:"wrap" }}>
        <div className='lgnd1'
          style={{
            height: "100vh",
            width: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft: "5%"
          }}
        >
          <div className='lgnd1' style={{ height: "97vh", width: "70%" }}>

            <label
              style={{
                fontSize: 30,
                fontWeight: "bolder",
                letterSpacing: "1px",

              }}
            >
              Signup as a student
            </label>

            <br />
            <br />
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <input onChange={(e) => setName(e.target.value)} placeholder="Full Name" style={{ width: "100%", height: 40,border:validation===true&name===""?"1px solid red":"1px solid grey" }} />
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly", }}>

              <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" style={{ width: "100%", height: 40, border:validation===true&email===""?"1px solid red":"1px solid grey"}} />
              <label style={{fontSize:12, color:"red", display:(!email.includes("@")||!email.includes(".com"))&validation?"block":"none"}}>*Invalid Email</label>

            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: "100%", height: 40,border:validation===true&password===""?"1px solid red":"1px solid grey" }} />
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setGrade(e.target.value)} style={{ width: "100%", height: 40,border:validation===true&grade===""?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Knowledge Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advance</option>
                <option>Fluent</option>
              </select>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>

              <select onChange={(e) => setAreaOfStudy(e.target.value)} style={{ width: "100%", height: 40,border:validation===true&areaOfStudy===""?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Area of study</option>
                <option>High School Diploma</option>
                <option>Associate's Degree</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD or Doctorate</option>
                <option>Teaching Certification</option>
                <option>other</option>
              </select>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setSkills([...skills,e.target.value])} style={{ width: "100%", height: 40,border:validation===true&skills.length<1?"1px solid red":"1px solid grey" }}>
                <option selected disabled>Skills</option>
                {courseData.map((i)=>
                <option>{i.courseName}</option>
                )}
 

              </select>
    
            </div>
            <div style={{height:10, width:"100%", display:"flex", alignItems:"center"}}>
              {skills.map((i)=><label style={{marginLeft:10}}>{i},</label>)}
              </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "60px", justifyContent: "space-evenly" }}>
              <select onChange={(e) => setLanguage(e.target.value)} style={{ width: "100%", height: 40, border:validation===true&language===""?"1px solid red":"1px solid grey"}}>
                <option selected disabled>Learning Objective</option>
                <option>Become a Web Developer</option>
                <option>To obtain Data Analytics and Problem-Solving abilities</option>
                <option>Gain Logic Development skills</option>
                <option>Become Dev-Ops Engineer</option>
                <option>Become a Software Developer</option>
                <option>Develop Artificial Intelligence professional</option>
                <option>Acquire knowledge of Quality Assurance</option>


              </select>
            </div>
            <br />
            <button onClick={() => { postStudentData() }} style={{ width: "100%", height: 40, borderRadius: 5, color: "white", backgroundColor: "black", border: "none" }}>Create Account</button><br /><br />
            <label>Already have an account? <span onClick={() => navigate("/")} style={{ color: "#8b5fb3" }}>Login</span></label>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Signupstudent;
