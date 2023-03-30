export interface BookRequest {
  id?: number;
  name?: string;
  description?: string;
}

export interface BookResponse {
  id: number;
  name: string;
  description: string;
}
