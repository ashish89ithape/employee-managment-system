export interface ApiResponse<T> {
  status: "success" | "error"; // literal type
  data: T;
  message?: string;
}