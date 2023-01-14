export type VideoDetailTypes = {
  snippet: {
    channelId: string;
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
};
export type relatedToVideo = {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}[];
