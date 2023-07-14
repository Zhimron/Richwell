import React from "react";
import InputText from "../../../components/form/textfield/Input";
import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { postData, data } = useFetch(
    "https://richwellcolleges.edu.ph/api/loginEmployee.php",
    "POST"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!id || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setIsLoading(true);

    postData({
      id: id,
      user_email: email,
      password: password,
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      let saveStorage;
      const currentAccessStorage = localStorage.getItem("access_token");
      if (typeof currentAccessStorage === "string") {
        saveStorage = currentAccessStorage;
        if (saveStorage) {
          navigate("/role");
        }
      } else {
        navigate("/role");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      }
    }
    setIsLoading(false);
  }, [data, navigate]);

  return (
    <>
      <div className="h-screen w-full  bg-primary ">
        <div className="">
          <div className="flex justify-center ">
            <div className="w-[375px]  h-[500px] rounded-lg shadow-lg mt-[3rem] bg-white">
              <h1 className="text-3xl text-center mt-10">Admin Login </h1>
              <div className="flex justify-center">
                <img
                  src="https://richwellcolleges.com/wp-content/uploads/2022/09/logp.png"
                  alt=""
                  className=" h-[50px] w-[50px] rounded-full shadow-lg mb-3 "
                />
              </div>

              {error && (
                <p className="text-rose-900 mb-5 text-center">{error}</p>
              )}
              <form className="register form" onSubmit={handleSubmit}>
                <div className="  px-4">
                  <InputText
                    label="Employee ID"
                    type="text"
                    name="email"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                  />
                </div>
                <div className=" py-4 px-4">
                  <InputText
                    label="Email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="px-4 mb-2 ">
                  <InputText
                    label="Password"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <label
                  htmlFor="checkbox"
                  className="inline-flex items-center cursor-pointer ml-4 my-4"
                >
                  <input
                    type="checkbox"
                    className="border-0 rounded text-gray-700 ml-1  w-5 h-5 ease-linear transition-all duration-15"
                  />
                  <span className=" text-sm font-semibold text-gray-700  ml-1   ">
                    Log me out after
                  </span>
                </label>

                <div className="text-center  py-3 px-4">
                  <button
                    className="bg-[#833AB4] hover:shadow-md text-white font-bold capitalize py-2 px-4 w-full rounded"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "LOGIN"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
