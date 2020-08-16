export type UserTypes = 'admin' | 'base';

export interface User {
  id: string;
  name: string;
  gender: string;
  age: number;
}

export interface AuthState {
  user: User | null;
  isPending: boolean;
}
