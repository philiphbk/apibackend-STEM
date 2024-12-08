import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Tutor } from "./tutor.entity";
import { NotFoundException } from "@nestjs/common";
import { logger } from "../utils/logger";

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private tutorRepository: Repository<Tutor>
  ) {}

  async findAll(): Promise<Tutor[]> {
    return await this.tutorRepository.find();
  }

  async findOne(id: number): Promise<Tutor> {
    try {
      const tutor = await this.tutorRepository.findOne({ where: { id } });
      if (!tutor) {
        throw new Error(`Tutor with ID ${id} not found`);
      }
      return tutor;
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Database Error: ${error.message}`);
      }
      throw error;
    }
  }

  async create(tutor: Partial<Tutor>): Promise<Tutor> {
    try {
      const newTutor = this.tutorRepository.create(tutor);
      return await this.tutorRepository.save(newTutor);
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Failed to create tutor: ${error.message}`);
      }
      throw new Error("Database operation failed");
    }
  }

  async update(id: number, tutor: Partial<Tutor>): Promise<Tutor> {
    await this.tutorRepository.update(id, tutor);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tutorRepository.delete(id);
  }
}
