import {
  ChannelDetailInfoType,
  ChannelDetailVideosType,
} from "./Channel.types";
import { VideosType } from "./Feed.types";
import { relatedToVideo, VideoDetailTypes } from "./VideoProps.types";

export type UseStoreType = {
  selectedCategory: string;
  videos: VideosType[];
  screenLoader: boolean;
  videoDetails: VideoDetailTypes | null;
  relatedToVideo: relatedToVideo | null;
  channelInfo: ChannelDetailInfoType | null;
  channelVideos: ChannelDetailVideosType[] | null;
};
