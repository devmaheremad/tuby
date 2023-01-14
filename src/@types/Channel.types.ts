export type ChannelDetailInfoType = {
  snippet: {
    title: string,
    thumbnails: {
      medium: {
        url: string
      }
    }
  },
  statistics: {
    subscriberCount: string
  }
}

export type ChannelDetailVideosType = {
  id: {
    videoId?: string,
  },
  snippet: {
    channelId: string,
    channelTitle: string,
    title: string,
    thumbnails: {
      medium: {
        url: string
      }
    }
  }
}