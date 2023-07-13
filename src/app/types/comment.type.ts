export interface comment {
    id: number,
    score: number,
    user: {
      image: {
        png : string
      },
      username: string,
    }
    createdAt: string,
    content: string,
    replies: comment[],
    replyingTo?: string,
  }