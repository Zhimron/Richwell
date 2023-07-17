import React, { useEffect } from "react";
import { getGrades } from "../api/studentInfo";
import { useQuery } from "@tanstack/react-query";
import Table from "../../components/table/Table";
function Grades() {
  useEffect(() => {
    document.title = "Grades";
  }, []);

  const { data, isLoading, isError, error } = useQuery(["Grades"], getGrades);
  const columns = [
    { id: "subject_code", label: "Subject Code", width: 150 },
    { id: "subject_name", label: "Subject Name", width: 150 },
    { id: "units", label: "Unit", width: 150 },
    { id: "grade", label: "Grade", width: 150 },
    { id: "grade_classification", label: "Grade Classification", width: 150 },
  ];
  const rows = data || [];

  console.log("data", rows);

  return (
    <div className=" h-auto w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
    </div>
  );
}

export default Grades;
