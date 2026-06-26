import type { proposalType } from "../../types/proposalTypes";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

export default function ProposalRow({ proposal, index }: { proposal: proposalType; index: number }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>{proposal.status}</td>
      <td>++</td>
    </Table.Row>
  );
}
