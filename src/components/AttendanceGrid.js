
import React from "react";

const AttendanceGrid = ({ teachers, handleAttendanceChange }) => {
    return (
        <table id="currentScheduleTable">
            <thead>
                <tr>
                    <th>Teacher</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {teachers.map((teacher) => (
                    <tr key={teacher.name}>
                        <td>{teacher.name}</td>
                        <td>
                            <select data-teacher={teacher.name} value={teacher.attendance} onChange={(e) => handleAttendanceChange(teacher, e.target.value)}>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceGrid;
