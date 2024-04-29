import { createRecord } from '@/utils/recordsFunctions';
import React from 'react'

const Create = () => {
    const entry = defaultRecordValues;

    const onSubmit = async(data) =>{
        try {
            const response = await createRecord(data);
            if (data) {
                Router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <RecordForm data={entry} onSubmit={onSubmit} />
    );
}

export default Create;