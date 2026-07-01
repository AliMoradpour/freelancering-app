import type { CreateProposalForm } from "../types/proposalTypes";
import http from "./httpService";

export type ChangeStatusPayload = {
  proposalId: string;
  projectId: string | undefined;
  status: string;
};

export function changeProposalStatusApi({ proposalId, ...data }: ChangeStatusPayload) {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}

export function getProposalsApi() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}

export type CreateProposalPayload = CreateProposalForm & { projectId: string };

export function createProposalApi(payload: CreateProposalPayload) {
  return http.post("/proposal/add", payload).then(({ data }) => data.data);
}