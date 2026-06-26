import type { createProjectPayload } from "../types/projectTypes";
import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id: string) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createProjectApi(data: createProjectPayload) {
  return http.post("/project/add", data).then(({ data }) => data?.data);
}

export function editProjectApi({ id, newProject }: { id: string; newProject: createProjectPayload }) {
  return http.patch(`/project/update/${id}`, newProject).then(({ data }) => data?.data);
}

export function toggleProjectStatusApi({ id, data }: { id: string; data: { status: string } }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export function getProjectApi(id: string) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}
