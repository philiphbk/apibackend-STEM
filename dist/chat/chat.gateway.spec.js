"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const chat_service_1 = require("./chat.service");
describe("ChatService", () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [chat_service_1.ChatService],
        }).compile();
        service = module.get(chat_service_1.ChatService);
    });
    it("should save and retrieve messages", () => {
        const payload = { sender: "user1", text: "Hello, world!" };
        const message = service.saveMessage(payload);
        expect(message.text).toEqual("Hello, world!");
        expect(service.findAllMessages()).toContainEqual(message);
    });
});
