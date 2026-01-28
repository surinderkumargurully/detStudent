import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BANDS_API } from "../config/api";

type ProfileStore = {
    avatar: string;
    name: string;
    loading: boolean;

    setProfile: (data: { avatar?: string; name?: string }) => void;
    fetchProfile: (token: string) => Promise<void>;
    clearProfile: () => void;
};

export const useProfileStore = create<ProfileStore>()(
    persist(
        (set) => ({
            avatar: "",
            name: "",
            loading: false,

            setProfile: (data) =>
                set({
                    avatar: data.avatar ?? "",
                    name: data.name ?? "",
                }),

            fetchProfile: async (token: string) => {
                try {
                    set({ loading: true });

                    const response = await fetch(
                        `${BANDS_API}/v3/api/profile-detail`,
                        {
                            method: "POST",
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Device-Type": "0",
                                Accept: "application/json",
                                "Content-Type":
                                    "application/x-www-form-urlencoded; charset=UTF-8",
                            },
                            body: new URLSearchParams({
                                is_web: "true",
                            }),
                        }
                    );

                    const result = await response.json();

                    if (result?.flag === 1 && result?.data) {
                        set({
                            avatar: result.data.avatar || "",
                            name: result.data.name || "",
                        });
                    }
                } catch (error) {
                    console.error("Profile API error:", error);
                } finally {
                    set({ loading: false });
                }
            },

            clearProfile: () => set({ avatar: "", name: "" }),
        }),
        {
            name: "profile-storage",
        }
    )
);
