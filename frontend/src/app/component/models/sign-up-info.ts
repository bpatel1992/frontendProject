import { last } from "rxjs/operators";

export class SignUpInfo {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
  }
}
