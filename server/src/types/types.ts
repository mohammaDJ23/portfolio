export interface MessageHandlerInputTypes {
  inputs: {
    name: string;
    email: string;
    message: string;
  };
}

export interface MessageHandlerReturnTypes {
  message: string;
}

export interface GraphQlCustomErrorTypes {
  message: string;
  code: number;
}

export interface ValidationTypes {
  name: string;
  email: string;
  message: string;
}

export enum InputsEnums {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message"
}

export type ValidationReturnTypes = ({ [key: string]: string } | (never[] & { length: 0 }))[];
