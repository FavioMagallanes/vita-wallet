import { api } from "@/config/axios/axios-instance";

export type SignInData = {
  email: string;
  password: string;
};

export type LoginServiceResponse = {
  userdata: {
    first_name: string;
  };
  headers: {
    "access-token": string;

    client: string;
    expiry: string;
    uid: string;
  };
};

export const signIn = async (
  data: SignInData,
): Promise<LoginServiceResponse> => {
  try {
    const response = await api.post("/auth/sign_in", {
      email: data.email,
      password: data.password,
      dev_mode: "true",
    });

    const { data: responseData, headers } = response;

    const userdata = {
      first_name: responseData.data.attributes.first_name,
    };

    const headersData = {
      "access-token": headers["access-token"],
      client: headers.client,
      expiry: headers.expiry,
      uid: headers.uid,
    };

    return { userdata, headers: headersData };
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};
