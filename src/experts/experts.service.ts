import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import CreateExpertsDto from './dtos/create-experts'
import UpdateExpertsDto from './dtos/update-experts'

@Injectable()
export class ExpertsService {
	constructor(private readonly prisma: PrismaService) {}

	async findExpertByEmail(email: string) {
		return this.prisma.expert.findFirst({
			where: {
				email
			}
		})
	}

	async createExpert(data: CreateExpertsDto) {
		return this.prisma.expert.create({ data })
	}

	async findAllExperts() {
		return await this.prisma.expert.findMany()
	}

	async findExpert(id: string) {
		return await this.prisma.expert.findFirst({
			where: { id }
		})
	}

	async updateExpert(id: string, data: UpdateExpertsDto) {
		await this.prisma.expert.update({
			where: { id },
			data
		})
	}
}
