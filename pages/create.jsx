import Form from "@/components/Form";
import { recordDefaultValues } from "@/utils/constants";
import { createRecord } from "@/utils/recordsFunctions";
import { useRouter } from "next/router";
import React from 'react';

const Create = () => {
  const router = useRouter();
  const entry = recordDefaultValues;

  const onSubmit = async (data) => {
  const response = await createRecord(data);

    if (response) {
      router.push("/");
    } else {
      alert("Failed to create record");
    }
  }

  return (
      <Form data={entry} onSubmit={onSubmit} />
  );
};

export default Create;
