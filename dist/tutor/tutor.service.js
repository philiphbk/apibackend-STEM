"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tutor_entity_1 = require("./tutor.entity");
const logger_1 = require("../utils/logger");
let TutorService = class TutorService {
    constructor(tutorRepository) {
        this.tutorRepository = tutorRepository;
    }
    async findAll() {
        return await this.tutorRepository.find();
    }
    async findOne(id) {
        try {
            const tutor = await this.tutorRepository.findOne({ where: { id } });
            if (!tutor) {
                throw new Error(`Tutor with ID ${id} not found`);
            }
            return tutor;
        }
        catch (error) {
            if (error instanceof Error) {
                logger_1.logger.error(`Database Error: ${error.message}`);
            }
            throw error;
        }
    }
    async createTutor(tutor) {
        try {
            const newTutor = this.tutorRepository.create(tutor);
            return await this.tutorRepository.save(newTutor);
        }
        catch (error) {
            if (error instanceof Error) {
                logger_1.logger.error(`Failed to create tutor: ${error.message}`);
            }
            throw new Error("Database operation failed");
        }
    }
    async update(id, tutor) {
        await this.tutorRepository.update(id, tutor);
        return this.findOne(id);
    }
    async remove(id) {
        await this.tutorRepository.delete(id);
    }
};
exports.TutorService = TutorService;
exports.TutorService = TutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tutor_entity_1.Tutor)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TutorService);
