import React, { useState, useEffect } from "react";
import { getStudentList } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FullInformation from "../studentlist/FullInformation";
function StudentEnrolled() {
  const { showInfo, setshowInfo } = useState(false);
  const handleClick = () => {
    setshowInfo(true);
  };
  const { data, isLoading, isError, error } = useQuery(
    ["StudentList"],
    getStudentList
  );

  const columns = [
    { id: "student_id", label: "Student Id", width: 150 },
    { id: "fullName", label: "Name", width: 150 },
    { id: "contact_no", label: "Contact", width: 150 },
    { id: "infoButton", label: "Info", width: 150 },
  ];

  const rows = data || [];

  console.log("data", rows);

  return (
    <div className="h-auto w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table
          columns={columns}
          rows={rows.map((item) => ({
            ...item,
            fullName: `${item.first_name} ${item.middle_name} ${item.last_name}`,
            infoButton: (
              <button>
                <VisibilityIcon />
              </button>
            ),
          }))}
        />
      )}
    </div>
  );
}

export default StudentEnrolled;
