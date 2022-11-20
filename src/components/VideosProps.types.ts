export type VideosProps = {
  videos: {
    id: {
      videoId?: string,
      channelId?: string
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
  }[]
}
