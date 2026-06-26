type userType = {
  avatarUrl: string | null;
  name: string;
  _id: string;
};

export type proposalType = {
  createdAt: string;
  description: string;
  duration: number;
  price: number;
  status: 0 | 1 | 2;
  updatedAt: string;
  user: userType;
  _id: string;
};
