import { useState } from "react";
import type { ProposalType } from "../../types/proposalTypes";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

export default function ProposalRow({ proposal, index }: { proposal: ProposalType; index: number }) {
  const { status, description, duration, price } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <p>{truncateText(description, 50)}</p>
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
      </td>
    </Table.Row>
  );
}
