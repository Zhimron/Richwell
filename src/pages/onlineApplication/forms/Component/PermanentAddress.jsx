import React, { useState } from "react";
import InputText from "../../../../components/form/textfield/Input";
import CheckBoxComponent from "../../../../components/form/checkbox/CheckBox";

const PermanentAddress = (props) => {
  const { permanentAddress, currentAddress, handleChangePermanentAddress } =
    props;
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const getPermanentAdressValue = () => {
    if (checked) {
      permanentAddress.permanentStreetUnit = currentAddress.currentStreetUnit;
      permanentAddress.permanentStreet = currentAddress.currentStreet;
      permanentAddress.permanentSubdivision = currentAddress.currentSubdivision;
      permanentAddress.permanentBarangay = currentAddress.currentBarangay;
      permanentAddress.permanentCity = currentAddress.currentCity;
      permanentAddress.permanentProvince = currentAddress.currentProvince;
      permanentAddress.permanentZipCode = currentAddress.currentZipCode;
      return {
        permanentStreetUnit: currentAddress.currentStreetUnit,
        permanentStreet: currentAddress.currentStreet,
        permanentSubdivision: currentAddress.currentSubdivision,
        permanentBarangay: currentAddress.currentBarangay,
        permanentCity: currentAddress.currentCity,
        permanentProvince: currentAddress.currentProvince,
        permanentZipCode: currentAddress.currentZipCode,
      };
    } else {
      return {
        permanentStreetUnit: permanentAddress.permanentStreetUnit,
        permanentStreet: permanentAddress.permanentStreet,
        permanentSubdivision: permanentAddress.permanentSubdivision,
        permanentBarangay: permanentAddress.permanentBarangay,
        permanentCity: permanentAddress.permanentCity,
        permanentProvince: permanentAddress.permanentProvince,
        permanentZipCode: permanentAddress.permanentZipCode,
      };
    }
  };
  const addressValue = getPermanentAdressValue();

  // const getPermanentAdressStreetValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentStreet = currentAddress.currentStreet);
  //   } else {
  //     return permanentAddress.permanentStreet;
  //   }
  // };
  // const getPermanentAdressSubdivisionValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentSubdivision =
  //       currentAddress.currentSubdivision);
  //   } else {
  //     return permanentAddress.permanentSubdivision;
  //   }
  // };
  // const getPermanentAdressBarangayValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentBarangay =
  //       currentAddress.currentBarangay);
  //   } else {
  //     return permanentAddress.permanentBarangay;
  //   }
  // };
  // const getPermanentAdressCityValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentCity = currentAddress.currentCity);
  //   } else {
  //     return permanentAddress.permanentCity;
  //   }
  // };
  // const getPermanentAdressProvinceValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentProvince =
  //       currentAddress.currentProvince);
  //   } else {
  //     return permanentAddress.permanentProvince;
  //   }
  // };
  // const getPermanentAdressZipCodeValue = () => {
  //   if (checked) {
  //     return (permanentAddress.permanentZipCode =
  //       currentAddress.currentZipCode);
  //   } else {
  //     return permanentAddress.permanentZipCode;
  //   }
  // };

  return (
    <div className="w-full p-5">
      <div className="mb-5 flex gap-2 relative">
        <h1 className="text-primary text-[20px] font-bold">
          Permanent Address
        </h1>
        <div className="absolute right-[50%] translate-x-[50%]">
          <CheckBoxComponent
            label="Same as Current Address"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="Street # / Unit #"
          variant="filled"
          type="text"
          name="permanentStreetUnit"
          value={addressValue.permanentStreetUnit}
          onChange={handleChangePermanentAddress}
        />
        <InputText
          label="Street"
          variant="filled"
          type="text"
          name="permanentStreet"
          value={addressValue.permanentStreet}
          onChange={handleChangePermanentAddress}
        />
        <InputText
          label="Subdivision / Village / Bldg"
          variant="filled"
          type="text"
          name="permanentSubdivision"
          value={addressValue.permanentSubdivision}
          onChange={handleChangePermanentAddress}
        />
        <InputText
          label="Barangay"
          variant="filled"
          type="text"
          name="permanentBarangay"
          value={addressValue.permanentBarangay}
          onChange={handleChangePermanentAddress}
        />
      </div>
      <div className="flex gap-2 mb-5">
        <InputText
          label="City / Municipality"
          variant="filled"
          type="text"
          name="permanentCity"
          value={addressValue.permanentCity}
          onChange={handleChangePermanentAddress}
        />
        <InputText
          label="Province"
          variant="filled"
          type="text"
          name="permanentProvince"
          value={addressValue.permanentProvince}
          onChange={handleChangePermanentAddress}
        />
        <InputText
          label="Zip Code"
          variant="filled"
          type="text"
          name="permanentZipCode"
          value={addressValue.permanentZipCode}
          onChange={handleChangePermanentAddress}
        />
      </div>
    </div>
  );
};

export default PermanentAddress;
