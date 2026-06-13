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
