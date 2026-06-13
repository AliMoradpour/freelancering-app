import type { DateObject } from "react-multi-date-picker";

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
  title: string;
  description: string;
  deadline?: DateObject | null;
  budget: string;
  category: string;
};
