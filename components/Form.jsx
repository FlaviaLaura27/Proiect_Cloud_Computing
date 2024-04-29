import React, { useState } from "react";
import { useRouter } from "next/router";

const Form = (props) => {
  const router = useRouter();
  const { entry, onSubmit } = props;
  const [data, setData] = useState(entry);

  const updateEntry = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }
 
  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80">
        <div>
          <label
            htmlFor="FirstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            //value={data.FirstName}
            onChange={(e) => updateEntry("FirstName", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="LastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
           // value={data.LastName}
            onChange={(e) => updateEntry("LastName", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>
          <input
            type="number"
            id="Age"
           // value={data.Age}
            onChange={(e) => updateEntry("Age", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Age"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Interests"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Interests
          </label>
          <input
            type="text"
            id="Interests"
           // value={data.Interests}
            onChange={(e) => updateEntry("Interests", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Interests"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Demographics"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Demographics
          </label>
          <input
            type="text"
            id="Demographics"
           // value={data.Demographics}
            onChange={(e) => updateEntry("Demographics", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Demographics"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Profession"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Profession
          </label>
          <input
            type="text"
            id="Profession"
           // value={data.Profession}
            onChange={(e) => updateEntry("Profession", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Profession"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Income"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Income
          </label>
          <input
            type="text"
            id="Income"
           // value={data.Income}
            onChange={(e) => updateEntry("Income", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Income"
            required
         ></input>
        </div>
        <div className="w-full flex justify-center gap-4">
            <button
            type="button"
            onClick={handleCancel}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(data)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          > Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;