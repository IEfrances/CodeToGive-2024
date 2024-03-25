import React, { useState, useEffect } from 'react';
import './RemindersFragment.css'; // Import CSS file
import { MdDeleteForever } from "react-icons/md";








function RemindersFragment() {
    const [reminders, setReminders] = useState([
        {heading: 'Reminder 1', meetingInfo: 'Meeting Info 1', date: '2022-01-01', time: '12:00', type: 'Type 1', note: 'Note 1', communication: 'Communication 1'},
        {heading: 'Reminder 2', meetingInfo: 'Meeting Info 2', date: '2022-02-02', time: '13:00', type: 'Type 2', note: 'Note 2', communication: 'Communication 2'},
        {heading: 'Reminder 3', meetingInfo: 'Meeting Info 3', date: '2022-03-03', time: '14:00', type: 'Type 3', note: 'Note 3', communication: 'Communication 3'},
        {heading: 'Reminder 4', meetingInfo: 'Meeting Info 4', date: '2022-04-04', time: '15:00', type: 'Type 4', note: 'Note 4', communication: 'Communication 4'},
    ]);

    const [selectedReminder, setSelectedReminder] = useState(null);
    const [newReminder, setNewReminder] = useState({ heading: '', meetingInfo: '', date: '', time: '', type: '', note: '', communication: ''});
    const [showForm, setShowForm] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);


    const handleReminderClick = (reminder) => {
        setSelectedReminder(reminder);
    };

    const handleCloseModal = () => {
        setSelectedReminder(null);
    };

    const handleInputChange = (event) => {
        setNewReminder({ ...newReminder, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setReminders([...reminders, newReminder]);
        setNewReminder({ heading: '', meetingInfo: '', date: '', time: '' , type: '', note: '', communication: ''});
        setShowForm(false);
        setIsFormOpen(false);
    };

    const handleLongPress = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index, 1);
        setReminders(newReminders);

    };

    useEffect(() => {
        if (isFormOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isFormOpen]);

    

    return (

        <div className='container'>

            <div className='list-view-reminders'>
                <div style={{paddingBottom: '50px'}}>
                    
                {reminders.map((reminder, index) => (
                    <div key={index} className="reminder-item !bg-red-100 border-double border-rose-200"  onClick={() => handleReminderClick(reminder)} onContextMenu={(event) => { event.preventDefault(); handleLongPress(index); }}>
                        <delete-button onClick={() => handleLongPress(index)}><MdDeleteForever style={{fontSize: '20px'}}/></delete-button>
                        <div className="reminder-item-content">
                            <h2 className="reminder-heading">{reminder.heading}</h2>
                            <div className="reminder-details">
                                <p><strong>Meeting Info: </strong> {reminder.meetingInfo}</p>
                                <p><strong>Type: </strong> {reminder.type}</p>
                                <p><strong>Note: </strong> {reminder.note}</p>
                                <p><strong>Communication: </strong> {reminder.communication}</p>

                            </div>
                        </div>
                        <div className="reminder-date">
                            <p>{reminder.date} at {reminder.time}</p>
                        </div>

                    </div>
                ))}

                <button className='bg-rose-400' onClick={() => {setShowForm(true);setIsFormOpen(true)} }>Add Reminder</button>
                
                {showForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={() => {setShowForm(false);setIsFormOpen(false)}}>&times;</span>
                            <form className="form-container" onSubmit={handleFormSubmit}>
                                <input name="heading" value={newReminder.heading} onChange={handleInputChange} placeholder="Reminder Heading" required />
                                <input name="meetingInfo" value={newReminder.meetingInfo} onChange={handleInputChange} placeholder="Meeting Info" required />
                                <input name="date" value={newReminder.date} onChange={handleInputChange} placeholder="Date (YYYY-MM-DD)" required />
                                <input name="time" value={newReminder.time} onChange={handleInputChange} placeholder="Time (HH:MM)" required />
                                <input name="type" value={newReminder.type} onChange={handleInputChange} placeholder="Type" required />
                                <input name="note" value={newReminder.note} onChange={handleInputChange} placeholder="Note" required />
                                <input name="communication" value={newReminder.communication} onChange={handleInputChange} placeholder="Means of Communication" required />
                                <br />
                                <button type="submit" style={{marginBottom: '30px'}}>Add Reminder</button>
                            </form>
                        </div>
                    </div>
                )}
           
                </div>
                

            </div>

            <div className='scheduler !bg-rose-200'>

            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FEdmonton&bgcolor=%23ffffff&title=le%20chainon&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043" style={{height: ' 480px',width: '530px',marginLeft: '10px', borderWidth: '0px', borderRadius: "10px"}}></iframe>
               

            </div>
        </div>
        
        
    );
}

export default RemindersFragment;

