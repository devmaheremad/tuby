export type ChannelCardProps = {
  channelDetails: {
    id: {
      channelId?: string,
    },
    snippet: {
      title: string,
      channelTitle: string,
      channelId: string
      thumbnails: {
        medium: {
          url: string
        }
      }
    },
    statistics?: {
      subscriberCount: string
    }
  }
}
