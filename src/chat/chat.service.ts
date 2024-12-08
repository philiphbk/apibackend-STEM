import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "../dto/create-message.dto";

@Injectable()
export class ChatService {
  private messages: CreateMessageDto[] = []; // Simulating a database for now

  saveMessage(payload: CreateMessageDto): CreateMessageDto {
    const message = { ...payload, createdAt: new Date() };
    this.messages.push(message);
    return message;
  }

  findAllMessages(): CreateMessageDto[] {
    return this.messages;
  }
}
