import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const AttendanceCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10, 1));

  const attendanceData = {
    leaves: [{ start: new Date(2024, 10, 12), end: new Date(2024, 10, 20) }],
    absences: [new Date(2024, 10, 25)],
    halfDays: [new Date(2024, 10, 15), new Date(2024, 10, 16)],
    presents: [
      new Date(2024, 10, 1),
      new Date(2024, 10, 2),
      new Date(2024, 10, 3),
    ],
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateMonthDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleMonthChange = (monthIndex) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      parseInt(monthIndex),
      1
    );
    setCurrentMonth(newDate);
  };

  const handleYearChange = (year) => {
    const newDate = new Date(parseInt(year), currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
  };

  const getAttendanceStatus = (day) => {
    if (!day) return null;

    const isInLeavePeriod = attendanceData.leaves.some(
      (leave) => day >= leave.start && day <= leave.end
    );
    if (isInLeavePeriod) return "leave";

    if (
      attendanceData.absences.some(
        (d) => d.toDateString() === day.toDateString()
      )
    )
      return "absence";

    if (
      attendanceData.halfDays.some(
        (d) => d.toDateString() === day.toDateString()
      )
    )
      return "half-day";

    if (
      attendanceData.presents.some(
        (d) => d.toDateString() === day.toDateString()
      )
    )
      return "present";

    return null;
  };

  const renderDay = (day) => {
    if (day === null) {
      return (
        <div
          key={`empty-${Math.random()}`}
          className="p-2 border text-gray-300"
        ></div>
      );
    }

    const status = getAttendanceStatus(day);

    return (
      <div
        key={day.toISOString()}
        className={`
          p-2 border text-center 
          ${status === "leave" ? "bg-blue-100 text-blue-800 font-bold" : ""}
          ${status === "absence" ? "bg-red-100 text-red-800 font-bold" : ""}
          ${
            status === "half-day"
              ? "bg-yellow-100 text-yellow-800 font-bold"
              : ""
          }
          ${status === "present" ? "bg-green-100 text-green-800" : ""}
          ${day.getMonth() !== currentMonth.getMonth() ? "text-gray-300" : ""}
        `}
      >
        {day.getDate()}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-lg mx-auto my-10">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Employee Attendance Calendar
          <div className="flex space-x-2">
            <Select
              value={currentMonth.getMonth().toString()}
              onValueChange={handleMonthChange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                {monthNames.map((month, index) => (
                  <SelectItem key={month} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={currentMonth.getFullYear().toString()}
              onValueChange={handleYearChange}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {generateYearOptions().map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold text-center py-1">
              {day}
            </div>
          ))}

          {generateMonthDays().map(renderDay)}
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-100 mr-2"></div>
            <span>Leave</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 mr-2"></div>
            <span>Absence</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-100 mr-2"></div>
            <span>Half Day</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-100 mr-2"></div>
            <span>Present</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceCalendar;
