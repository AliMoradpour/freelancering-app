export type ProjectProps = {
  _id: number;
  title: string;
  budget: number;
  deadline: string;
  status: "OPEN" | "CLOSED";
};