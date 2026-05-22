import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetService {
    tweets: { text: string, date: Date, userId: number}[] = [
        { text: "First Tweet", date: new Date("2026-01-03"), userId: 1 },
        { text: "Second Tweet", date: new Date("2026-02-07"), userId: 1 },
        { text: "Third Tweet", date: new Date("2026-03-13"), userId: 2 },
        { text: "Fourth Tweet", date: new Date("2026-04-08"), userId: 2 },
        { text: "Fifth Tweet", date: new Date("2026-05-03"), userId: 3 },
    ];

    getTweets(userId?: number) {
        if (userId)
            return this.tweets.filter(tweet => tweet.userId == userId);

        return this.tweets;
    }
}
