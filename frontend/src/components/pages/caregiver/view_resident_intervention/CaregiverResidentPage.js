import React, { useEffect, useState } from 'react';
import "./CaregiverResidentPage.css"; // Import CSS file

//import company logo
import company_logo from "./company_logo.png";
import {VscAccount} from  "react-icons/vsc";


import { LuGoal } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";


const CaregiverResidentPage = () => {

    const [activeContent, setActiveContent] = useState('goals');

    useEffect(() => {
        const list = document.querySelectorAll('.list');

        function activeLink() {
            list.forEach((item) => 
                item.classList.remove('active'));
            this.classList.add('active');
        }

        list.forEach((item) =>
            item.addEventListener('click', activeLink));

        return () => {
            list.forEach((item) =>
                item.removeEventListener('click', activeLink));
        };
    }, []);

    return (
        
        <div className="resident-profile-container-caregiver ">

            <div class="navigation">
                <ul>
                    <VscAccount 
                        style={{color: 'white', fontSize: '1em', marginRight: '50px'}}
                    />
                    {/* Main content of your application */}

                    <li className={activeContent === 'profile' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('profile')}>
                            <span class="icon">
                            <FaRegUser style={{fontSize: '1em'}}/></span>
                            <span class="title">PROFILE</span>
                        </a>
                    </li>

                    <li className={activeContent === 'goals' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('goals')}>
                            <span class="icon">
                            <LuGoal style={{fontSize: '1em'}}/></span>
                            <span class="title">GOALS</span>
                        </a>
                    </li>
                    <li className={activeContent === 'reminders' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('reminders')}>
                            <span class="icon">
                            <FaRegBell style={{fontSize: '1em'}}/></span>
                            <span class="title">REMINDERS</span>
                        </a>
                    </li>
                    <li className={activeContent === 'resources' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('resources')}>
                            <span class="icon">
                            <FaBook style={{fontSize: '1em'}}/></span>
                            <span class="title">RESOURCES</span>
                        </a>
                    </li>
                    <li className={activeContent === 'messages' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('messages')}>
                            <span class="icon">
                            <FiMessageSquare style={{fontSize: '1em'}}/></span>
                            <span class="title">MESSAGES</span>
                        </a>
                    </li>

                    <li  className={activeContent === 'notes' ? 'list active' : 'list'}>
                        <a href="#" onClick={() => setActiveContent('notes')}>
                            <span class="icon">
                            <CgNotes style={{fontSize: '1em'}}/></span>
                            <span class="title">NOTES</span>
                        </a>
                    </li>

                </ul>
            </div>
            


            <div className="header-bar-caregiver">
                <div className="circle-icon">
                </div>
                {/* add company logo to the header */}
                <img src={company_logo} alt="company logo" style={{width: '400px', height: '200px', marginLeft: '60%'}}/>
    
            </div>

            {/* Additional content for the Caregiver Resident Page */}
            <div className='additional-content'>
                {activeContent === 'profile' && (
                    <>
                        <h2>Welcome Back, (Caregiver Name) 👋</h2>
                        <p>Your profile information will be displayed here!</p>
                    </>
                )}
                {activeContent === 'goals' && (
                    <>
                        <h2>Goals</h2>
                        <p>Your SMART goals/objectives forms and list will be displayed on this page!</p>
                    </>
                )}
                {activeContent === 'reminders' && (
                    <>
                        <h2>Reminders</h2>
                        <p>Your reminders will be displayed here!</p>
                    </>
                )}
                {activeContent === 'resources' && (
                    <>
                        <h2>Resources</h2>
                        <p>Your resources will be displayed here!</p>
                    </>
                )}
                {activeContent === 'messages' && (
                    <>
                        <h2>Messages</h2>
                        <p>Your messages will be tracked here!</p>
                    </>
                )}
                {activeContent === 'notes' && (
                    <>
                        <h2>Notes</h2>
                        <p>Your notes will be tracked here!</p>
                    </>
                )}
            </div>
        
        </div>
    );
};

export default CaregiverResidentPage;

