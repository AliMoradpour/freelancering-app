import type { ReactNode } from "react";

type childrenProps = {
  children: ReactNode;
};

function Table({ children }: childrenProps) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }: childrenProps) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: childrenProps) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: childrenProps) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
