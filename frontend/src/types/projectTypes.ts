import type { ProposalType } from "./proposalTypes";

export type OwnerProjectType = {
  _id: string;
  title: string;
  description: string;
  category: { _id: string; title: string };
  budget: number;
  deadline: string;
  tags: string[];
  freelancer?: { name: string };
  status: "OPEN" | "CLOSED";
  proposals?: ProposalType[];
};

export type CreateProjectFormValue = {
  title: string;
  description: string;
  deadline?: Date;
  budget: string;
  category: string;
  tags: string[];
};

export type createProjectPayload = Omit<CreateProjectFormValue, "deadline"> & {
  deadline?: string;
};
