import React from "react";
import animationData from "../../../../assets/lottie/students.json";
import InputText from "../../../../components/form/textfield/Input";
import SelectItems from "../../../../components/form/select/SelectItems";
import Datefield from "../../../../components/form/textfield/DateField";
const StudentInfo = ({ details, handleChange }) => {
  const gender = ["Male", "Female"];
  const civilStatus = ["Single", "Maried"];
  return (
    <div className="w-full p-10 ">
      <div className="w-full p-5 ">
        <div className="mb-5">
          <h1 className="text-primary text-[20px] font-bold">
            Student Information
          </h1>
        </div>
        <div className="flex gap-2 mb-5">
          <InputText
            label="First Name"
            variant="filled"
            type="text"
            name="firstName"
            value={details.firstName}
            onChange={handleChange}
          />
          <InputText
            label="Middle Name"
            variant="filled"
            type="text"
            name="middleName"
            value={details.middleName}
            onChange={handleChange}
          />
          <InputText
            label="Last Name"
            variant="filled"
            type="text"
            name="lastName"
            value={details.lastName}
            onChange={handleChange}
          />

          <InputText
            label="Suffix Name"
            variant="filled"
            type="text"
            name="suffixName"
            value={details.suffixName}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 mb-5">
          <SelectItems
            name="gender"
            options={gender}
            value={details.gender}
            onChange={handleChange}
            label="Gender"
          />
          <SelectItems
            name="civilStatus"
            options={civilStatus}
            value={details.civilStatus}
            onChange={handleChange}
            label="Civil Status"
          />

          <InputText
            label="Citizenship"
            variant="filled"
            type="text"
            name="citizenship"
            value={details.citizenship}
            onChange={handleChange}
          />
          <Datefield
            label="Date of Birth"
            variant="filled"
            type="date"
            name="DateOfBirth"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 mb-5">
          <InputText
            label="Place of Birth"
            variant="filled"
            type="text"
            name="placeOfBirth"
            value={details.placeOfBirth}
            onChange={handleChange}
          />
          <InputText
            label="Religion"
            variant="filled"
            type="text"
            name="religion"
            value={details.religion}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
