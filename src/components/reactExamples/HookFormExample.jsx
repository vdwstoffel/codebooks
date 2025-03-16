import { useForm } from "react-hook-form";

import BrowserWindow from "../BrowserWindow/BrowserWindow";
import { useState } from "react";

export default function HookFormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [formDetails, setFormDetails] = useState({});

  const onSubmit = (data) => setFormDetails(data);

  console.log(watch("example"));

  return (
    <>
      <p>Form Details: {JSON.stringify(formDetails)}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>example</label>
          <input defaultValue="test" {...register("example")} />
        </div>

        <div>
          <label>exampleRequired</label>
          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}
