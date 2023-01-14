export type VideoCardProps = {
  video: {
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
}