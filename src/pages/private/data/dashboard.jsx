import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ClassIcon from "@mui/icons-material/Class";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PaymentsIcon from "@mui/icons-material/Payments";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export const data = [
  {
    icon: <HomeIcon className="text-gray-400" />,
    title: "Home ",
    path: "/home",
  },
  {
    icon: <Diversity3Icon className="text-gray-400" />,
    title: "Students",
    path: "/student",
  },
  {
    icon: <PersonIcon className="text-gray-400" />,
    title: "Instructors",
    path: "/instructor",
  },
  {
    icon: <ClassIcon className="text-gray-400" />,
    title: "Classes",
    path: "/classes",
  },
  {
    icon: <EventNoteIcon className="text-gray-400" />,
    title: "Exams",
    path: "/exam",
  },
  {
    icon: <ShowChartIcon className="text-gray-400" />,
    title: "Reports",
    path: "/reports",
  },
  {
    icon: <PaymentsIcon className="text-gray-400" />,
    title: "Accounting",
    path: "/accounting",
  },
  {
    icon: <MailIcon className="text-gray-400" />,
    title: "Messages",
    path: "/message",
  },
];
