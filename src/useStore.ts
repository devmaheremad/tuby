import { create as createZusStore } from "zustand";
import { UseStoreType } from "./@types/UseStore.types";

export const useStore = createZusStore<UseStoreType>((set) => ({
  screenLoader: false,
  selectedCategory: "Frontend",
  videos: [],
  videoDetails: null,
  relatedToVideo: null,
  channelInfo: null,
  channelVideos: null,
}));
