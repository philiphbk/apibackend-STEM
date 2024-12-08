"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tutor_controller_1 = require("./tutor.controller");
describe('TutorController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [tutor_controller_1.TutorController],
        }).compile();
        controller = module.get(tutor_controller_1.TutorController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
