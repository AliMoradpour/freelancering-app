export type ProjectProps = {
  _id: string;
  title: string;
  budget: number;
  deadline: string;
  status: "OPEN" | "CLOSED";
};
