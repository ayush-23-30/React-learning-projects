import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

function ManualForm() {
  const [visible, setVisiable] = useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisiable] = useState(false);

  const handlerShowingPassword = () => {
    setVisiable(!visible);
  };

  const handlerShowingConfirmPassword = () => {
    setConfirmPasswordVisiable(!ConfirmPasswordVisible);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    age: "",
    dob: "",
    password: "",
    confirm: "",
    gender: "", // Changed to lowercase
  });

  const [errors, setErrors] = useState({}); // initialize as an empty object

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (number) => {
    const validRegex = /^\d{10}$/;
    return validRegex.test(number);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age) => {
    const ageInt = parseInt(age);
    return Number.isInteger(ageInt) && ageInt >= 18 && ageInt <= 100;
  };

  const isValidDOB = (dob) => {
    const date = new Date();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear();

    const [dobYear, dobMonth, dobDay] = dob.split("-").map(Number);

    if (dobYear === y && dobMonth === m && dobDay === d) {
      return false;
    }
    return true;
  };

  const validForm = () => {
    let newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.number) {
      newErrors.number = "Enter a phone number!";
    } else if (!isValidPhoneNumber(formData.number)) {
      newErrors.number = "Enter a valid phone number";
    }
    if (!formData.password) {
      newErrors.password = "Enter a password!";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }
    if (!formData.confirm) {
      newErrors.confirm = "Confirm your password";
    } else if (formData.confirm !== formData.password) {
      newErrors.confirm = "Passwords do not match!";
    }
    if (!formData.age) {
      newErrors.age = "Enter your age!";
    } else if (!isValidAge(formData.age)) {
      newErrors.age =
        "You must be at least 18 years old and not older than 100 years";
    }
    if (!formData.gender) {
      newErrors.gender = "Select your gender";
    }
    if (!formData.dob) {
      newErrors.dob = "Enter your date of birth";
    } else if (!isValidDOB(formData.dob)) {
      newErrors.dob = "Enter a valid date of birth";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlerForm = (e) => {
    e.preventDefault();
    if (validForm()) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form Submission Failed");
    }
  };

  return (
    <>
      <div className="bg-gray-600 h-screen flex flex-col pt-4">
        <h1 className="text-xl font-bold text-center text-cyan-100 font-serif">
          Form with Manual Validations
        </h1>

        <div className="mt-3 ml-1 flex items-center justify-center ">
          <form
            onSubmit={handlerForm}
            className="flex flex-col gap-2 gap-x-2 justify-center "
          >
            <div className="flex mx-2 justify-between text-fuchsia-100">
              <label htmlFor="firstname">First Name:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="rounded-md pl-2 ml-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="firstname"
                  onChange={formDataHandler}
                  value={formData.firstname}
                  id="firstname"
                />
                {errors.firstname && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstname}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="lastname">Last Name:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="text"
                  id="lastname"
                  value={formData.lastname}
                  onChange={formDataHandler}
                  placeholder="Enter your last name"
                  className="rounded-md pl-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="lastname"
                />
                {errors.lastname && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.lastname}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="email">Email:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="text"
                  value={formData.email}
                  onChange={formDataHandler}
                  placeholder="Enter your email"
                  className="rounded-md pl-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="email"
                  id="email"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="number">Ph. Number:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="number"
                  placeholder="Enter your Mobile no."
                  className="rounded-md pl-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="number"
                  value={formData.number}
                  onChange={formDataHandler}
                  id="number"
                />
                {errors.number && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.number}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="age">Age:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="rounded-md pl-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="age"
                  value={formData.age}
                  onChange={formDataHandler}
                  id="age"
                />
                {errors.age && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.age}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="dob">DOB:</label>
              <div className="flex flex-col w-[32vw]">
                <input
                  type="date"
                  placeholder="Enter your DOB"
                  className="rounded-md pl-2 text-gray-600 font-semibold placeholder:text-black outline-none"
                  name="dob"
                  value={formData.dob}
                  onChange={formDataHandler}
                  id="dob"
                />
                {errors.dob && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.dob}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="gender">Gender:</label>
              <div className="flex flex-col w-[32vw]">
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={formDataHandler}
                  name="gender"
                  className="rounded-md pl-2 text-gray-600 font-semibold outline-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.gender}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="password">Password:</label>
              <div className="flex flex-col w-[32vw]">
                <div className="flex items-center justify-between rounded-md pl-2 bg-white">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="rounded-md text-gray-600 font-semibold placeholder:text-black outline-none w-full"
                    name="password"
                    value={formData.password}
                    onChange={formDataHandler}
                    id="password"
                  />
                  <div className="cursor-pointer" onClick={handlerShowingPassword}>
                    {visible ? <IoEyeSharp /> : <FaEyeSlash />}
                  </div>
                </div>
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 mx-2 flex justify-between text-fuchsia-100">
              <label htmlFor="confirm">Confirm Password:</label>
              <div className="flex flex-col w-[32vw]">
                <div className="flex items-center justify-between rounded-md pl-2 bg-white">
                  <input
                    type={ConfirmPasswordVisible ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="rounded-md text-gray-600 font-semibold placeholder:text-black outline-none w-full"
                    name="confirm"
                    value={formData.confirm}
                    onChange={formDataHandler}
                    id="confirm"
                  />
                  <div className="cursor-pointer" onClick={handlerShowingConfirmPassword}>
                    {ConfirmPasswordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                  </div>
                </div>
                {errors.confirm && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.confirm}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white mt-3 p-2 rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ManualForm;
