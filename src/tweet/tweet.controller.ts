import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {
    constructor(private tweetService: TweetService) {}

    @Get()
    getTweets() {
        return this.tweetService.getTweets();
    }

    @Get(":userId")
    getUserTweets(@Param("userId", ParseIntPipe) userId: number) {
        return this.tweetService.getTweets(userId);
    }
}
