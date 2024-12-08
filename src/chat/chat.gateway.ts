import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";
import { CreateMessageDto } from "../dto/create-message.dto";

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private readonly logger = new Logger(ChatGateway.name);

  constructor(private readonly chatService: ChatService) {}

  // Handle a new connection
  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  // Handle a client disconnection
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Listen for incoming messages
  @SubscribeMessage("message")
  async handleMessage(client: Socket, payload: CreateMessageDto) {
    this.logger.log(`Message received: ${payload.text} from ${payload.sender}`);

    // Save the message in the database (via the ChatService)
    const message = await this.chatService.saveMessage(payload);

    // Broadcast the message to all connected clients
    this.server.emit("message", message);
  }
}
