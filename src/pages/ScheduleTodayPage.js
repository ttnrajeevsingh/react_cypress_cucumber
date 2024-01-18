
import React, { useState } from "react";
import AttendanceGrid from "../components/AttendanceGrid";
import ScheduleGrid from "../components/ScheduleGrid";
import { teachers, students, allocations } from "../data";

const ScheduleTodayPage = () => {
    const [teachersData, setTeachersData] = useState(teachers); // Store teacher attendance status

    const handleAttendanceChange = (teacher, status) => {
        // Update teacher attendance status
        let tempteachersdata = JSON.parse(JSON.stringify(teachersData));
        tempteachersdata = tempteachersdata.map((item) => {
            if (item.id === teacher.id) {
                return {
                    ...item,
                    attendance: status
                }
            }
            else {
                return item;
            }
        });
        setTeachersData(tempteachersdata)
    };

    return (
        <>
            <div className="pageheader">Schedule Today</div>
            <div className='schedule-container'>

                {/* Attendance Section */}
                <div className="attendance-section">
                    <h2>Attendance</h2>
                    <AttendanceGrid teachers={teachersData} handleAttendanceChange={handleAttendanceChange} />
                </div>

                {/* Vertical Separator */}
                <div className="separator" />

                {/* Current Schedule Section */}
                <div className="schedule-section">
                    <h2>Current Schedule</h2>
                    <ScheduleGrid students={students} allocations={allocations} teachers={teachersData} />
                </div>
            </div>
        </>

    );
};

export default ScheduleTodayPage;
