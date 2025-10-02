import React from "react";

const FormAction = () => {
  const handleFormData = (formData) => {
             console.log(formData.get('name'))
             console.log(formData.get('email'))
  };

  return (
    <div>
      <form action={handleFormData}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
