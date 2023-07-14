import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "../../../assets/images/admin.png";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import dashboard from "../../../assets/lottie/dashboard.json";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Lottie from "lottie-react";
import { useFetch } from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
const Roles = () => {
  const [credlist, setCredList] = useState([]);
  const { postHeaders, data, error } = useFetch(
    "https://richwellcolleges.edu.ph/api/userCred",
    "GET"
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      setCredList(data);
    }
  }, [data]);

  useEffect(() => {
    postHeaders();
  }, []);

  return (
    <>
      <div className="h-screen w-full pt-[2rem]  ">
        <div className=" w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
          <img src={heroBg} alt="" className="w-full h-full object-fit " />
        </div>
        <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
        <div className="flex">
          <div className="container mx-auto py-auto ">
            <div className="flex justify-center ">
              ``
              <motion.div
                whileInView={{ y: 0, opacity: 2 }}
                animate={{ backgroundColor: "purple", y: "-50%" }}
                transition={{ duration: 0.4 }}
                className="h-[580px] w-[40%]   rounded-l-xl  "
              >
                <Lottie animationData={dashboard} loop={false} />
                <div className="bg-white"></div>
              </motion.div>
              <div className="h-[580px] w-[40%] bg-white rounded-r-xl ">
                <div className="flex  flex-col justify-center  p-[5rem] ">
                  <h2 className="text-left gap-1 font-bold">
                    Select Dashboard{" "}
                  </h2>
                  <h1 className="text-left mb-4 text-slate-400">
                    Lor ipsum dolor sit, amet consectetur
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-2  gap-6  justify-center">
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="h-[150px] w-[150px] bg-purple-600  rounded-md flex flex-col items-center pt-10
                      
                    
                    "
                    >
                      <AppRegistrationRoundedIcon
                        sx={{ fontSize: 45 }}
                        className="text-purple-900"
                      />
                      <h1 className="font-bold text-purple-900">
                        Registration
                      </h1>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-[150px] w-[150px] bg-amber-400  rounded-md flex flex-col items-center pt-10"
                    >
                      <LibraryBooksIcon
                        sx={{ fontSize: 45 }}
                        className="text-amber-700"
                      />
                      <h1 className="font-bold text-amber-700 pt-1">Ched</h1>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="h-[150px] w-[150px] bg-amber-400  rounded-md flex flex-col items-center pt-10"
                    >
                      <Diversity3Icon
                        sx={{ fontSize: 45 }}
                        className="text-amber-700"
                      />
                      <h1 className="font-bold text-amber-700 pt-1">
                        Senior Highschool
                      </h1>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-[150px] w-[150px] bg-purple-600   rounded-md flex flex-col items-center pt-10"
                    >
                      <AdminPanelSettingsIcon
                        sx={{ fontSize: 45 }}
                        className="text-purple-900"
                      />
                      <h1 className="font-bold text-purple-900">Admin</h1>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
