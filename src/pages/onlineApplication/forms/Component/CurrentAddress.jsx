import React from "react";
import InputText from "../../../../components/form/textfield/Input";

const CurrentAddress = ({ currentAddress, handleChangeCurrentAddress }) => {
  return (
    <div className="w-full p-5">
      <div className="mb-5">
        <h1 className="text-primary text-[20px] font-bold">Current Address</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-2 mb-5">
        <InputText
          label="Street # / Unit #"
          variant="filled"
          type="text"
          name="currentStreetUnit"
          value={currentAddress.currentStreetUnit}
          onChange={handleChangeCurrentAddress}
        />
        <InputText
          label="Street"
          variant="filled"
          type="text"
          name="currentStreet"
          value={currentAddress.currentStreet}
          onChange={handleChangeCurrentAddress}
        />
        <InputText
          label="Subdivision / Village / Bldg"
          variant="filled"
          type="text"
          name="currentSubdivision"
          value={currentAddress.currentSubdivision}
          onChange={handleChangeCurrentAddress}
        />
        <InputText
          label="Barangay"
          variant="filled"
          type="text"
          name="currentBarangay"
          value={currentAddress.currentBarangay}
          onChange={handleChangeCurrentAddress}
        />
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="City / Municipality"
          variant="filled"
          type="text"
          name="currentCity"
          value={currentAddress.currentCity}
          onChange={handleChangeCurrentAddress}
        />
        <InputText
          label="Province"
          variant="filled"
          type="text"
          name="currentProvince"
          value={currentAddress.currentProvince}
          onChange={handleChangeCurrentAddress}
        />
        <InputText
          label="Zip Code"
          variant="filled"
          type="text"
          name="currentZipCode"
          value={currentAddress.currentZipCode}
          onChange={handleChangeCurrentAddress}
        />
      </div>
    </div>
  );
};

export default CurrentAddress;
