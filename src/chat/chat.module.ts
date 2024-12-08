import { Module } from "@nestjs/common";
import { ChatGateway } from "./chat.gateway";
import { ChatService } from "./chat.service";

@Module({
  providers: [ChatGateway, ChatService], // Ensure ChatService is here
  exports: [ChatService],
})
export class ChatModule {}
