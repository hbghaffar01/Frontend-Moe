import {
  Arrowdown,
  Calendar,
  Download,
  Error,
  Home,
  Logo,
  Logout,
  Notification,
  Person,
  Success,
  User,
  Employees,
  Bell,
  NotFound,
  Sun,
  Message,
  PieCircle,
  Team,
} from "../assets";

const services = [
  {
    title: "Home",
    icon: Home,
    route: "/Dashboard",
  },
  {
    title: "Employee Details",
    icon: Person,
    route: "/Dashboard/EmployeeDetails",
  },
  {
    title: "Calendar",
    icon: Calendar,
    route: "/Dashboard/calendar",
  },
];

const menuItem = [
  { title: "Profile", route: "/Dashboard" },
  { title: "Leave Request", route: "/Dashboard/EmployeeDetails" },
  { title: "Setting", route: "/Dashboard/EmployeeDetails" },
];

const statuses = [
  { title: "present" },
  { title: "Early-out" },
  { title: "Absent" },
];

const navLinks = [
  {
    title: "Attendance",
    value: "Monday 10, 2024",
  },
  {
    title: "",
    value: "",
  },
  {
    title: "Working Hours",
    value: "9:00 AM to 6:00 PM",
  },
  {
    user: {
      title: "User Profile",
      value: "Haseeb",
      notification: Notification,
      profile: User,
      icon: Arrowdown,
      options: ["Profile", "Leave Request", "Logout"],
    },
  },
];

const cardData = [
  {
    id: 1,
    icon: Bell,
    title: "Total Workforce",
    value: 150,
    percentChange: "10% vs last month",
  },
  {
    id: 2,
    icon: Sun,
    title: "Present Today",
    value: 140,
    percentChange: "10% vs last month",
  },
  {
    id: 3,
    icon: NotFound,
    title: "Absent",
    value: 10,
    percentChange: "10% vs last month",
  },
  {
    id: 4,
    icon: Message,
    title: "Total Workforce",
    value: 150,
    percentChange: "10% vs last month",
  },
];

const tableData = [
  {
    date: "12/12",
    employee: "Haseeb",
    role: "Frontend Developer",
    status: "present",
    icon: Arrowdown,
    checkIn: "9:00 am",
    checkOut: "6:00 pm",
    overtime: "1h",
  },
  {
    date: "12/12",
    employee: "Musaib",
    role: "Backend Developer",
    status: "Absent",
    icon: Arrowdown,
    checkIn: "00:00 am",
    checkOut: "00:00 pm",
    overtime: "0h",
  },
  {
    date: "12/12",
    employee: "Joe",
    role: "Product Manager",
    status: "Early-out",
    icon: Arrowdown,
    checkIn: "9:00 am",
    checkOut: "3:00 pm",
    overtime: "0h",
  },
  {
    date: "12/12",
    employee: "Jazz",
    role: "Ui/Ux designer",
    status: "present",
    icon: Arrowdown,
    checkIn: "9:00 am",
    checkOut: "6:00 pm",
    overtime: "1h",
  },
  {
    date: "12/12",
    employee: "Uzma",
    role: "HR",
    status: "present",
    icon: Arrowdown,
    checkIn: "9:00 am",
    checkOut: "6:00 pm",
    overtime: "0h",
  },
];

const employeeDetails = {
  user: {
    name: "Haseeb Ghaffar",
    designation: "Frontend Engineer",
    work: "Frontend Developer skill with 5 years of experience.",
    image: User
  },
  personalInfo: [
    {
      label: "Email",
      value: "test@test.com",
    },
    {
      label: "Mobile Number",
      value: "+97152455455",
    },
    {
      label: "DOB",
      value: "19/10/1998",
    },
    {
      label: "Nationality",
      value: "Pakistani",
    },
    {
      label: "Residency",
      value: "United Arab Emirates",
    },
    {
      label: "Contract Type",
      value: "Permanent",
    },
    {
      label: "Joining Date",
      value: "15 Dec, 2024",
    },
    {
      label: "Designation",
      value: "Frontend Developer",
    },
    {
      label: "Department",
      value: "Falcon",
    },
    {
      label: "Team",
      value: "Development",
    },
    {
      label: "Experience",
      value: "5 year's",
    },
    {
      label: "Address",
      value: "al karama dubai",
    },
  ],
  attendance: {
    percentage: {
      present: "88%",
      absent: "12%",
    },
    downloadData: true,
  },
  teamMembers: [
    {
      name: "Haseeb Ghaffar",
      role: "Frontend Developer",
      attendance: "90%",
      image: Team,
      icon: PieCircle
    },
    {
      name: "Musaib",
      role: "Backend Developer",
      attendance: "90%",
      image: Team,
      icon: PieCircle
    },
    {
      name: "Omer",
      role: "Product Manager",
      attendance: "90%",
      image: Team,
      icon: PieCircle
    },
    {
      name: "Yalzin",
      role: "UI Designer",
      attendance: "90%",
      image: Team,
      icon: PieCircle
    },
  ],
};

export {
  services,
  navLinks,
  employeeDetails,
  menuItem,
  cardData,
  tableData,
  statuses,
};
