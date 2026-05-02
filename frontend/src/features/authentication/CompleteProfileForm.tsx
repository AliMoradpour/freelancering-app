import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-sm pt-20">
     <h2 className="font-black text-lg mb-8">اطلاعات خود را تکمیل کنید</h2>
      <form className="space-y-8">
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e?.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e?.target.value)}
        />

        <div className="flex justify-center gap-x-10 items-center">
          <RadioInput label="کارفرما" name="role" value="OWNER"/>
          <RadioInput label="فریلنسر" name="role" value="FREELANCER"/>
        </div>

        <button className="btn btn--primary w-full">تکمیل فرم</button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
