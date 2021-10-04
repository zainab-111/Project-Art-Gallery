import { Platform } from "react-native";

let baseURL = "http://8cc6-39-41-142-92.ngrok.io/api/v1/";

//For Production Purpose

// {
//   Platform.OS == "android"
//     ? (baseURL = "http://10.0.2.2:3000/api/v1/")
//     : (baseURL = "http://localhost:3000/api/v1/");
// }

export default baseURL;
