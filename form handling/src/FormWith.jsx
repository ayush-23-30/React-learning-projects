import React from "react";
import { useForm } from "react-hook-form";

function FormWith() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
    
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        action=""
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex border p-5 rounded-md bg-white flex-col shadow-2xl gap-3"
      >
        <h1 className="bg-zinc-400 rounded-md text-center p-1">
          Form With React Hook Form
        </h1>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="First Name"
          {...register("first", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Name should contain at least 3 letters",
            },
          })}
          id="first"
        />
        <p className="my-3 text-red-800">
          {errors.first && errors.first.message}
        </p>

        <input
          type="text"
          placeholder="Last Name"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          {...register("last", {
            required: "This field is required.",
            minLength: { value: 3, message: "Minimum 3 letters are required" },
          })}
          id="last"
        />
        <p className="my-3 text-red-800">
          {errors.last && errors.last.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email address",
            },
          })}
          id="email"
        />
        <p className="my-3 text-red-800">
          {errors.email && errors.email.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Phone Number"
          {...register("number", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Number must be 10 digits long",
            },
            maxLength: {
              value: 10,
              message: "Number must be 10 digits long",
            },
          })}
          id="number"
        />
        <p className="my-3 text-red-800">
          {errors.number && errors.number.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Age"
          {...register("age", {
            required: "Please enter your age",
            validate: (value) =>
              value >= 18 && value <= 60
                ? true
                : "Age must be between 18 and 60",
          })}
          id="age"
        />
        <p className="my-3 text-red-800">
          {errors.age && errors.age.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 1"
          {...register("street1", {
            required: "Please enter your street address",
            maxLength: {
              value: 100,
              message: "Address can't be longer than 100 characters",
            },
          })}
          id="street1"
        />
        <p className="my-3 text-red-800">
          {errors.street1 && errors.street1.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Address Street 2"
          {...register("street2", {
            required: "Please enter your address",
            maxLength: {
              value: 100,
              message: "Address can't be longer than 100 characters",
            },
          })}
          id="street2"
        />
        <p className="my-3 text-red-800">
          {errors.street2 && errors.street2.message}
        </p>

        <input
          type="text"
          className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
          placeholder="Country"
          {...register("country", {
            required: "This field is required",
          })}
          id="country"
        />
        <p className="my-3 text-red-800">
          {errors.country && errors.country.message}
        </p>

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

// import React from "react";
// import { useForm } from "react-hook-form";

// function FormWith() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmitHandler = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <form
//         action=""
//         onSubmit={handleSubmit(onSubmitHandler)}
//         className="flex border p-5  rounded-md bg-white flex-col shadow-2xl gap-3"
//       >
//         <h1 className="bg-zinc-400 rounded-md text-center p-1">
//           Form With React hook Form{" "}
//         </h1>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2  rounded-md h-8 outline-none bg-gray-600"
//           placeholder="First Name"
//           // name="first"
//           {...register("first", {
//             required: "This feild is required",
//             minLength: {
//               value: 3,
//               message: "Name should be contain 3 letters ",
//             },
//           })}
//           id="name"
//         />
//         <p className=" my-3 text-red-800">
//           {" "}
//           {errors.first && errors.name.message}{" "}
//         </p>

//         <input
//           type="text"
//           placeholder="Last Name"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           // name="last"
//           {...register("last", {
//             required: "This feild is required.",
//             minLength: { value: 3, message: "minimum 3 letters are required " },
//           })}
//           id="last"
//         />
//            <p className=" my-3 text-red-800">
//           {" "}
//           {errors.last && errors.last.message}{" "}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Email"
//           // name="email"
//           {...register("email", { required: "this is a required feild "  , validate : {

//           }})}
//           id="email"
//         />
//            <p className=" my-3 text-red-800">
//           {" "}
//           {errors.email && errors.email.message}{" "}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Phone Number"
//           // name="number"
//           {...register("number", {
//             required: "this feild is required ",
//             minLength : {
//               value : 10 , 
//               message : "Number can be only 10 digits not less not more."
//             }
//           })}
//           id="number"
//         />
//            <p className=" my-3 text-red-800">
//           {" "}
//           {errors.number  && errors.number.message}{" "}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Age"
//           // name="age"
//           {...register("age" , { required : "enter your age " , validate : {
//             message : " age must be less than 60 and more than 18. "
//           } })  }
//           id="age"
//         />
//            <p className=" my-3 text-red-800">
        
//           {errors.age && errors.age.message}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Address Street 1"
//           // name="street1"
//           {...register("street1" , {required : "please enter your street address" , maxLength : {
//             value : 100 , message : "address can't be long then 100 words "
//           } })}
//           id="street1"
//         />
//            <p className=" my-3 text-red-800">
//           {" "}
//           {errors.street1 && errors.street1.message}{" "}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Address Street 2"
//           // name="street2"
//           {...register("street2", {required : "enter your address " , maxLength : {value : "100 " , message : "maximum 100 words "}})}
//           id="street2"
//         />
//            <p className=" my-3 text-red-800">
       
//           {errors.street2 && errors.street2.message}{" "}
//         </p>
//         <input
//           type="text"
//           className="w-60 md:w-96 p-2 rounded-md h-8 outline-none bg-gray-600"
//           placeholder="Country"
//           // name="country"
//           {...register("country"  , {required : "this feild is required !"})}
//           id="country"
//         />
//            <p className=" my-3 text-red-800">
//           {" "}
//           {errors.country }{" "}
//         </p>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-400 p-2 rounded-full font-semibold md:w-28 md:text-xl hover:text-white text-center"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }