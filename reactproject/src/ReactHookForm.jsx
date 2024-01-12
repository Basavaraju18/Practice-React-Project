import React from "react";
import { useForm } from "react-hook-form";
import "./ReactHookForm.css"

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  let submitFormData = (fdata) => {
    console.log(fdata)
  };

  console.log(errors);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submitFormData)}>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter Fullname"
            {...register("fn", {
              required: { value: true, message: "Fullname is Required" },
              minlength: {
                value: 6,
                message: "Fullname Should contain Minimum 6 characters",
              },
            })}
            
          />
         <small>{errors.fn && errors.fn.message}</small>

        </div>

        <div>
          <div className="input-div">
            <input
              type="tel"
              placeholder="Mobile"
              {...register("mob", {
                required: { value: true, message: "Mobile number Required" },
                minlength: {
                  value: 10,
                  message: "Mobile Should contain Minimum 10 Numbers",
                },
                pattern: {
                  value: /^[6-9][0-9]{9}$/,
                  message: "mobile umber should  contains onely 10 numbers",
                },
              })}
            />
            <small>{errors.mob?.message}</small>
          </div>

          <div className="input-div">
            <input type="email" 
                   placeholder="email" 
                  {...register("email")} />
          </div>

          <div className="input-div">
            <input
              type="password"
              placeholder="Password"
              {...register("pwd")}
            />
          </div>

          <div className="input-div">
            <button type="submit">Register</button>
          </div>        
        </div>
      </form>
    </div>
  );
}

export default ReactHookForm;
