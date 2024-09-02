import React from "react";
import { useForm } from "react-hook-form";

function FormWith() {

  const { register, handleSubmit, formState } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        action=""
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex border p-5 rounded-md bg-white flex-col shadow-2xl gap-3"
      >
        <h1 className="bg-zinc-400 rounded-md text-center p-1">Form With  React hook Form </h1>
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="First Name"
          // name="first"
          {...register("first")}
          id="name"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          // name="last"
          {...register("last")}
          id="last"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Email"
          // name="email"
          {...register("email")}
          id="email"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Phone Number"
          // name="number"
          {...register("number")}
          id="number"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Age"
          // name="age"
          {...register("age")}
          id="age"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 1"
          // name="street1"
          {...register("street1")}
          id="street1"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 2"
          // name="street2"
          {...register("street2")}
          id="street2"
        />
        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Country"
          // name="country"
          {...register("country")}
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

export default FormWith;
// useForm from React-hook then {register , handleSubmit} - both simpling correct ho. 
// input k ander name ki jaga {...register} [ye hoga ye detsructure karega] , ye vahi onChange handler ka kam karega 
// form onSubmit = {handleSubmit} , aur iske parameter m Function pass kardo jo tumhe banya hai ki kya hoga jab click karee 

