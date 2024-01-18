Feature: Hogwarts Scheduling

  Scenario: Auto-assignment of teacher when not allocated
    Given the Hogwarts teachers' attendance is as follows:
      | Teacher              | Attendance |
      | Professor Dumbledore | Present    |
      | Minerva McGonagall   | Present    |
      | Rubeus Hagrid        | Present    |
      | Horace Slughorn      | Present    |
      | Severus Snape        | Present    |

    And the current schedule is as follows:
      | Student           | Subject        | Teacher           |
      | Harry Potter      | Potions Master | Horace Slughorn   |
      | Hermione Granger  | Potions Master | Rubeus Hagrid     |
      | Ron Weasley       | Potions Master | Severus Snape     |
      | Draco Malfoy      | Potions Master | Horace Slughorn   |
      | Padma Patil       | Potions Master | Rubeus Hagrid     |
      | Luna Lovegood     | Potions Master | Rubeus Hagrid     |

    When the teacher Rubeus Hagrid is marked as "Absent"
    Then Hermione Granger should be auto-assigned the teacher Minerva McGonagall
    And the updated schedule should be as follows:
      | Student           | Subject        | Teacher           |
      | Harry Potter      | Potions Master | Horace Slughorn   |
      | Hermione Granger  | Potions Master | Minerva McGonagall     |
      | Ron Weasley       | Potions Master | Severus Snape     |
      | Draco Malfoy      | Potions Master | Horace Slughorn   |
      | Padma Patil       | Potions Master | Minerva McGonagall     |
      | Luna Lovegood     | Potions Master | Minerva McGonagall     |
