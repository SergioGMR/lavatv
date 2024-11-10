export type Video = {
    key: string
    name: string
    thumbnail: string
}

export type YouTubePlayerWithCarouselProps = {
    videos: Video[]
    initialVideoId?: string
}