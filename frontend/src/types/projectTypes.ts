export type ownerProjectType = {
  _id: string;
  title: string;
  category: { title: string };
  budget: number;
  deadline: string;
  tags: string[];
  freelancer?: { name: string };
  status: "OPEN" | "CLOSED";
};

export type createProjectFormValue = {
  _id: string;
  title: string;
  description: string;
  deadline?: Date | null;
  budget: string;
  category: string;
  tags: string[];
};

export type createProjectPayload = Omit<createProjectFormValue, "deadline"> & {
  deadline?: string;
};
