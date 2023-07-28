import { Component } from "react";
import { userInfo } from "../data/user";

export class UserService extends Component {
  static userInfo() {
    return userInfo;
  }
}

export default UserService;
