import type { FormValue } from "../features/project/ChangeProposalStatus";
import http from "./httpService";

type ChangeStatusProps = {
  data: FormValue;
  id: string;
};

export function changeProposalStatusApi({ id, data }: ChangeStatusProps) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

export function getProposalsApi() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}
