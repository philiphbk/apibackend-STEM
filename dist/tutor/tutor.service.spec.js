"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tutor_service_1 = require("./tutor.service");
describe('TutorService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [tutor_service_1.TutorService],
        }).compile();
        service = module.get(tutor_service_1.TutorService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
