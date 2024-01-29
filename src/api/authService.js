import axios from "axios";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/accounts/login/",
      credentials
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/accounts/register/",
      {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email,
        first_name: credentials.firstName,
        last_name: credentials.lastName,
        user_type: credentials.userType,
        specialization: credentials.specialization,
        credentials: credentials.credentials,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
