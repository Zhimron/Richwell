import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const ContactInformation = ({
  contactInformation,
  handleChangeContactInformation,
}) => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">
          Contact Information
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-2 mb-5">
        <InputText
          label="Telephone No."
          variant="filled"
          type="number"
          name="telephoneNumber"
          value={contactInformation.telephoneNumber}
          onChange={handleChangeContactInformation}
        />
        <InputText
          label="Mobile No."
          variant="filled"
          type="number"
          name="mobileNumber"
          value={contactInformation.mobileNumber}
          onChange={handleChangeContactInformation}
        />
        <InputText
          label="Email Address"
          variant="filled"
          type="email"
          name="emailAddress"
          value={contactInformation.emailAddress}
          onChange={handleChangeContactInformation}
        />
      </div>
    </div>
  );
};

export default ContactInformation;
