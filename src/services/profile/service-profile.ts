import { api } from "@/config/axios/axios-instance";
import { ProfileResponse } from "@/modules/dashboard/types/profile-types";

export const getUserProfile = async (): Promise<ProfileResponse> => {
  try {
    const response = await api.get<ProfileResponse>("/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
