import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import type { ProposalType } from "../../types/proposalTypes";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

export default function Stats({ proposals }: { proposals: ProposalType[] }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = proposals.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat color="primary" title="پروژه ها" value={numOfProposals} icon={<HiOutlineViewGrid className="size-20" />} />
      <Stat color="yellow" title="درخواست‌های تایید شده" value={acceptedProposals.length} icon={<HiCollection className="size-20" />} />
      <Stat color="green" title="کیف پول" value={toPersianNumbersWithComma(balance)} icon={<HiCurrencyDollar className="size-20" />} />
    </div>
  );
}
