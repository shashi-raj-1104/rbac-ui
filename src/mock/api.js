import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/api/users").reply(200, [
  
]);

mock.onPost("/api/users").reply(201, { message: "User added successfully" });
mock.onDelete(/\/api\/users\/\d+/).reply(200, { message: "User deleted successfully" });

export default axios;
