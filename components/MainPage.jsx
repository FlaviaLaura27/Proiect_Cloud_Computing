import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";
import Spinner from "./Spinner";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  if (isLoading){
    return <Spinner/>
  }

  return (
    <div className="p-4 flex flex-wrap gap-4">
      {records.map((record) => (
        <div
        className="max-w-sm p-6 bg-pink-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={record._id}
    >    
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {record.FirstName + " " + record.LastName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Age}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Interest}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Profession}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Income + " $"}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {record.Demographics}
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 
              dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleUpdateRecord(record._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="text-black bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
               dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => handleDeleteRecord(record._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;