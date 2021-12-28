export interface IApiResponse<T> {
  status: number;
  success: boolean;
  data: T;
  message: string;
}
