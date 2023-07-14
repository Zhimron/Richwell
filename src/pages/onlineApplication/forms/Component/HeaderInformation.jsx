import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import student from "../../../../assets/lottie/students.json";
import teaching from "../../../../assets/lottie/teaching.json";
import math from "../../../../assets/lottie/math.json";
import accounting from "../../../../assets/lottie/accounting.json";
import nursing from "../../../../assets/lottie/nursing.json";
import programmer from "../../../../assets/lottie/programmer.json";
import InputText from "../../../../components/form/textfield/Input";
import SelectItems from "../../../../components/form/select/SelectItems";

const HeaderInformation = ({ details, handleChange }) => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState([]);

  const courseOptions = data.map((course) => course.course_name);
  const admitType = ["New Student", "Transferee"];
  const yearLevel = ["First Year", "Second Year", "Third Year", "Fourth Year"];
  const selectTerm = ["1st Term", "2nd Term"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://richwellcolleges.edu.ph/api/collegeCourse.php"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderImage = () => {
    if (details.course === "BACHELOR OF SCIENCE IN MATHEMATICS") {
      return <Lottie animationData={math} />;
    } else if (
      details.course ===
      "BACHELOR OF TECHNICAL AND VOCATIONL TEACHING EDUCATION"
    ) {
      return <Lottie animationData={teaching} />;
    } else if (details.course === "BACHELOR OF SCIENCE IN NURSING") {
      return <Lottie animationData={nursing} />;
    } else if (details.course === "BACHELOR OF SCIENCE IN ACCOUNTANCY") {
      return <Lottie animationData={accounting} />;
    } else if (
      details.course === "BACHELOR OF SCIENCE IN INFORMATION SYSTEMS"
    ) {
      return <Lottie animationData={programmer} />;
    } else {
      return <Lottie animationData={student} />;
    }
  };

  return (
    <div className="flex w-full p-10">
      <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[50%] rounded-md shadow-md p-10 grid place-items-center">
        <h1 className="text-[30px] font-semibold text-white">
          Fill-up Your Information
        </h1>
        <div className="w-[20rem]">{renderImage()}</div>
      </div>
      <div className=" w-[50%] p-10">
        <div className="flex flex-col gap-2">
          <InputText
            label="School Year"
            value={`${currentYear} - ${currentYear + 1}`}
            inputProps={{
              readOnly: true,
            }}
            variant="filled"
            name="syYear"
          />
          <SelectItems
            name="admitAS"
            options={admitType}
            value={details.admitAS}
            onChange={handleChange}
            label="Admit Type"
          />
          <SelectItems
            name="course"
            options={courseOptions}
            value={details.course}
            onChange={handleChange}
            label="Course"
          />
          <SelectItems
            name="yrLevel"
            options={yearLevel}
            value={details.yrLevel}
            onChange={handleChange}
            label="Year Level"
          />
          <SelectItems
            name="term"
            options={selectTerm}
            value={details.term}
            onChange={handleChange}
            label="Select Term"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInformation;
