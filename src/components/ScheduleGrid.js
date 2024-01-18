import React from "react";
const ScheduleGrid = ({ teachers, allocations }) => {
    const getAssignedTeacher = (student) => {
        if (student.teacher) {
            //check if teacher is Present or Not
            let teacher = teachers?.filter((item) => {
                return item.name === student.teacher && item.attendance === 'Present';
            });
            if (teacher.length)
                return teacher[0].name;
        }
        // If no teacher is allocated, find the teacher higher up in hierarchy
        let availableTeachers = teachers?.filter((item) => {
            return item.attendance === 'Present' && item.subjects?.includes(student.subject)
        });
        let sortedTeachers = availableTeachers.length && availableTeachers.sort((a, b) => b.hierarchy - a.hierarchy);
        let sortedTeachersWithHeighrHierarchy = sortedTeachers.filter((item) => {
            return item.hierarchy < sortedTeachers[0].hierarchy;
        })
        if (sortedTeachersWithHeighrHierarchy.length) {
            return sortedTeachersWithHeighrHierarchy[0].name;
        }
        return "Not Assigned";
    };

    return (

        <table id="currentScheduleTable">
            {/* Schedule table headers */}
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                </tr>
            </thead>
            {/* Schedule table body */}
            <tbody>
                {allocations.map((item) => (
                    <tr data-test-id={item.student} key={item.student}>
                        <td>{item.student}</td>
                        <td>{item.subject}</td>
                        <td>{getAssignedTeacher(item)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default ScheduleGrid;
