export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface RegisterFormValues {
  userName: string;
  gender: UserGender;
  age: number;
}

export default RegisterFormValues;
