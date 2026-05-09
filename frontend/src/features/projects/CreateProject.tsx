import { useState } from "react";
import TextField from "../../ui/TextField";

function CreateProject() {
  const [title, setTitle] = useState<string>("");

  return (
    <form>
      <TextField
        label="عنوان پروژه"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default CreateProject;
