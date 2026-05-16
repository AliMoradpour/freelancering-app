
export type ownerProjectType = {
  _id: string;
  title: string;
  category: {
    title: string;
  };
  budget: number;
  deadline: string;
  tags: string[];
  freelancer?: {
    name: string;
  };
  status: "OPEN" | "CLOSED";
};


// types/projectTypes.ts
export type projectFormValue = {
  title: string;
  description: string;
  deadline?: string;
  budget: string;
  // هر فیلد دیگه‌ای که نیاز داری
};
