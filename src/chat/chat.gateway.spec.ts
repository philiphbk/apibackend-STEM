import { Test, TestingModule } from "@nestjs/testing";
import { ChatService } from "./chat.service";

describe("ChatService", () => {
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatService],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it("should save and retrieve messages", () => {
    const payload = { sender: "user1", text: "Hello, world!" };
    const message = service.saveMessage(payload);
    expect(message.text).toEqual("Hello, world!");
    expect(service.findAllMessages()).toContainEqual(message);
  });
});
