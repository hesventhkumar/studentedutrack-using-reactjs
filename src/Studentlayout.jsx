import React from 'react'
import Logo from './image/logo.png'
import { CiBadgeDollar } from "react-icons/ci";

const Studentlayout = () => {
  return (
    <div>

        <div class="container">
            <nav class="sidebar"> 
                <div className='text-center'><img src={Logo} alt="" className='w-50' /></div>
                <ul class="nav-list">
                    <li className='text-center m-4 p-3'>
                        <i class="fa-solid fa-users fs-1 "></i>
                        <br />
                        <a href="#home">Student Management</a>
                    </li>
                    <li className='text-center m-4 p-3'>
                    <i class="fa-solid fa-inbox fs-1 "></i>
                        <br />
                        <a href="#about" >Employee</a></li>
                    <li className='text-center m-4 '>
                        <div className='fs-1 '><CiBadgeDollar /></div>
                        <br />
                        <a href="#services">Quality Management</a>
                    </li>
                    <li className='text-center m-4 p-3'>
                        <i class="fa-solid fa-box fs-1 "></i>
                        <br />
                        <a href="#contact">Report Delivery</a>
                    </li>
                    <li className='text-center m-4 p-3'>
                        <i class="fa-solid fa-file fs-1 "></i>
                        <br />
                        <a href="#contact">Assignment</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className='h1'>Student Management System</div>





        <div className="detailcard">
            <div className="row">
                <div className="col-3">
                <div class="card bg-danger p-4" style={{width: "18rem"}}>
                    <div class="card-body">
                        <i class="fa-solid fa-users fs-1 "></i>
                        
                        <h6 class="card-subtitle mb-2 text-light my-2">Registered Student</h6>
                       
                    </div>
                </div>

                </div>
                <div className="col-3">
                <div class="card bg-primary p-4" style={{width: "18rem"}}>
                    <div class="card-body">
                        <i class="fa-solid fa-user-tie fs-1"></i>
                        <h6 class="card-subtitle mb-2 text-light my-2">Student</h6>
                       
                    </div>
                </div>
                </div>
                <div className="col-3">
                <div class="card bg-success p-4" style={{width: "18rem"}}>
                    <div class="card-body">
                        <i class="fa-solid fa-user-tie fs-1"></i>
                        <h6 class="card-subtitle mb-2 text-light my-2">Detail</h6>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>

        
        
        <div className='detail '>
        <p className='text-center'>Menu</p>
        <div className="row mt-5 text-center">
            <div className="col-4">
            <i class="fa-solid fa-user fs-1 text-primary text-center " />
            <p className=''>Register Enrollment</p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center " />
        <p>Remedial Enrollment</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-people-group fs-1 text-primary text-center" />
        <p>Club Management</p>
        </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-4">
            <i class="fa-solid fa-book-open-reader fs-1 text-primary text-center " />
            <p className=''><span className='ms-2'>Classroom</span>
                <br></br> Management
            </p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-envelope fs-1 text-primary text-center " />
        <p className=''>SMS/EMAIL</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center" />
        <p className=''>Attendence</p>
        </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-4"></div>
            <div className="col-4">
            <i class="fa-regular fa-hospital fs-1 text-primary text-center" />
            <p className=''> Clinic</p>
            </div>
            <div className="col-4"></div>
        </div>
       
        </div>


        


    </div>



        




       
      
   
  )
}

export default Studentlayout
