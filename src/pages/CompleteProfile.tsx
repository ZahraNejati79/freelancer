import { useState } from "react";
import TextField from "../ui/TextField";
import RadioInput from "../ui/RadioInput";

const CompleteProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <form className="space-y-8 w-full sm:max-w-sm mx-auto pt-10">
      <TextField
        label="نام و نام خانوادگی"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="ایمیل"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex items-center justify-center gap-4">
        <RadioInput
          label="کارفرما"
          name="role"
          id="OWNER"
          onChange={(e) => setRole(e.target.value)}
          value="OWNER"
          checked={role === "OWNER"}
        />
        <RadioInput
          label="فریلنسر"
          name="role"
          id="FREELANCER"
          onChange={(e) => setRole(e.target.value)}
          value="FREELANCER"
          checked={role === "FREELANCER"}
        />
      </div>

      <button className="btn btn--primary w-full">تایید</button>
    </form>
  );
};

export default CompleteProfile;
