export type ownerProjectType = {
  _id: string;
  title: string;
  description: string;
  category: { _id: string; title: string };
  budget: number;
  deadline: string;
  tags: string[];
  freelancer?: { name: string };
  status: "OPEN" | "CLOSED";
  proposals?: object;
};

export type createProjectFormValue = {
  title: string;
  description: string;
  deadline?: Date;
  budget: string;
  category: string;
  tags: string[];
};

export type createProjectPayload = Omit<createProjectFormValue, "deadline"> & {
  deadline?: string;
};
