export type ProposalStatus = 0 | 1 | 2;

type UserType = {
  avatarUrl: string | null;
  name: string;
  _id: string;
};

export type ProposalType = {
  createdAt: string;
  description: string;
  duration: number;
  price: number;
  status: ProposalStatus;
  updatedAt: string;
  user: UserType;
  _id: string;
};
