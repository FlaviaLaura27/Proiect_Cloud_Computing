import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import { recordDefaultValues } from "@/utils/constants";
import { getRecordById, updateRecord } from "@/utils/recordsFunctions";
import Form from "@/components/Form";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(recordDefaultValues);

  const getRecord = async (id) => {
    const data = await getRecordById(id);

    if (data) {
      setEntry(data);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    try{
        const response = await updateRecord(data);

        if (response) {
          router.push("/");
        } else {
          alert("Failed to update record");
        }
        
    }catch (error){
        console.log(error);
    }
   
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    getRecord(id);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {entry._id ? (
        <Form data={entry} onSubmit={onSubmit}/>
      ) : (
        <div className="text-center">Record not found</div>
      )}
    </>
  );
};

export default Edit;