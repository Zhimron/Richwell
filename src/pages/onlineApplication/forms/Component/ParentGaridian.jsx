import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const ParentGaridian = ({
  parentInformation,
  handleChangeParentInformation,
}) => {
  const parentGardian = [
    {
      Title: "Father's Information",
      option: "father",
    },
    {
      Title: "Mother's Information",
      option: "mother",
    },
    {
      Title: "Guardian's Information",
      option: "guardian",
    },
  ];
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">
          Parents / Guardian's Information
        </h1>
      </div>
      {parentGardian.map((parent, index) => (
        <div key={index}>
          <h1 className="ml-2 mb-5 text-[20px] text-[#504e4e]">
            {parent.Title}
          </h1>
          <div className="flex gap-2 mb-5">
            <InputText
              label="First Name"
              variant="filled"
              type="text"
              name={`${parent.option}FirstName`}
              value={parentInformation[parent.option + "FirstName"]}
              onChange={handleChangeParentInformation}
            />
            <InputText
              label="Middle Name"
              variant="filled"
              type="text"
              name={`${parent.option}MiddleName`}
              value={parentInformation[parent.option + "MiddleName"]}
              onChange={handleChangeParentInformation}
            />
            <InputText
              label="Last Name"
              variant="filled"
              type="text"
              name={`${parent.option}LastName`}
              value={parentInformation[parent.option + "LastName"]}
              onChange={handleChangeParentInformation}
            />
            <InputText
              label="Suffix Name"
              variant="filled"
              type="text"
              name={`${parent.option}SuffixName`}
              value={parentInformation[parent.option + "SuffixName"]}
              onChange={handleChangeParentInformation}
            />
          </div>
          <div className="flex gap-2 mb-5">
            <InputText
              label="Mobile No."
              variant="filled"
              type="number"
              name={`${parent.option}MobileNumber`}
              value={parentInformation[parent.option + "MobileNumber"]}
              onChange={handleChangeParentInformation}
            />
            <InputText
              label="Email"
              variant="filled"
              type="email"
              name={`${parent.option}EmailAddress`}
              value={parentInformation[parent.option + "EmailAddress"]}
              onChange={handleChangeParentInformation}
            />
            <InputText
              label="Occupation"
              variant="filled"
              type="text"
              name={`${parent.option}Occupation`}
              value={parentInformation[parent.option + "Occupation"]}
              onChange={handleChangeParentInformation}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentGaridian;
