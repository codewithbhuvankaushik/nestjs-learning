import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService) {

    }
    tweets: { text: string, date: Date, userId: number}[] = [
        { text: "First Tweet", date: new Date("2026-01-03"), userId: 1 },
        { text: "Second Tweet", date: new Date("2026-02-07"), userId: 1 },
        { text: "Third Tweet", date: new Date("2026-03-13"), userId: 2 },
        { text: "Fourth Tweet", date: new Date("2026-04-08"), userId: 2 },
        { text: "Fifth Tweet", date: new Date("2026-05-03"), userId: 3 },
    ];

    getTweets(userId?: number) {
        if (userId) {
            const user = this.userService.getUserById(userId);
            const tweets = this.tweets.filter(tweet => tweet.userId == userId);
            
            if (user) {
                return tweets.map(tweet => ({text: tweet.text, date: tweet.date, name: user.name}));
            }

            return tweets;
        }

        return this.tweets;
    }
}
