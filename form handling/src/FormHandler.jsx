import React, { useState } from "react";


function FormHandler() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    number: "",
    age: "",
    street1: "",
    street2: "",
    country: "",
  });

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FormHandling = (e) => {
    e.preventDefault();
    console.log("data: ", formData);
  };

  return (
    <div className="flex justify-center items-center mt-10">
     
      <form
        action=""
        onSubmit={FormHandling}
        className="flex border p-5 rounded-md bg-white flex-col shadow-2xl gap-3"
      >
         <h1 className="bg-zinc-400 rounded-md text-center p-1">Form without React hook Form </h1>
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="First Name"
          name="first"
          onChange={dataHandler}
          value={formData.first}
          id="name"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          name="last"
          value={formData.last}
          onChange={dataHandler}
          id="last"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={dataHandler}
          id="email"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Phone Number"
          name="number"
          onChange={dataHandler}
          value={formData.number}
          id="number"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Age"
          name="age"
          onChange={dataHandler}
          value={formData.age}
          id="age"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 1"
          name="street1"
          value={formData.street1}
          onChange={dataHandler}
          id="street1"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 2"
          name="street2"
          value={formData.street2}
          onChange={dataHandler}
          id="street2"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={dataHandler}
          id="country"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-full font-semibold md:w-28 md:text-xl hover:text-white text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormHandler;
