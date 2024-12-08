// src/app.module.ts

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatModule } from "./chat/chat.module";
import { TutorModule } from "./tutor/tutor.module";
import { ChatGateway } from "./chat/chat.gateway";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite", // or your preferred database type
      database: "database.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true,
    }),
    TutorModule,
    ChatModule,
  ],
  providers: [ChatGateway], // Add ChatGateway here
})
export class AppModule {}
