
export type owenrProjectType = {
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


export type projectFormValue = {
  title: string;
  category: string;
  budget: number;
  deadline: string;
  tags: string[];
}