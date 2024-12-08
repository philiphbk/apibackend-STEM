export class CreateMessageDto {
  sender!: string; // Username or client ID
  text!: string; // Message content
  room?: string; // Optional room or group
}
