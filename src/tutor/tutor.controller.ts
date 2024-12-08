import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  NotFoundException,
} from "@nestjs/common";
import { TutorService } from "./tutor.service";
import { Tutor } from "./tutor.entity";

@Controller("tutors")
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}
  @Get()
  async findAll(): Promise<Tutor[]> {
    return await this.tutorService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Tutor> {
    const tutor = await this.tutorService.findOne(id);
    if (!tutor) {
      throw new NotFoundException(`Tutor with ID ${id} not found`);
    }
    return tutor;
  }

  @Post()
  async create(@Body() createTutorDto: Partial<Tutor>): Promise<Tutor> {
    return await this.tutorService.create(createTutorDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() tutor: Partial<Tutor>
  ): Promise<Tutor> {
    return await this.tutorService.update(id, tutor);
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    return await this.tutorService.remove(id);
  }
}
