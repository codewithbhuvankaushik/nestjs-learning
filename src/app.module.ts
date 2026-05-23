import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRoot({
    type: "postgres",
    entities: [],
    synchronize: true,
    host: "localhost",
    port: 5433,
    username: "admin",
    password: "test",
    database: "appdb"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
