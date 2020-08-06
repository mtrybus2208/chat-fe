export type UserTypes = "admin" | "base";

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserTypes;
  page?: string;
}

export interface AuthState {
  user: User | null;
  isPending: boolean;
}
