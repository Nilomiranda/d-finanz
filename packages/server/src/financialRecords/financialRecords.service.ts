import { Tag } from "../tags/models/tag.model";
import { User } from "../users/models/user.model";
import { PrismaClientType } from "../_types/prismaClientType";
import {getPrismaClient} from "../main";
import { CreateFinancialRecordInput } from "./dto/createFinancialRecordInput";
import { FinancialRecordType } from ".prisma/client";
import { FinancialRecord } from "./models/financialRecord.model";
import { UpdateFinancialRecordInput } from "./dto/updateFinancialRecordInput";

export class FinancialRecordsService {
  async create(args: CreateFinancialRecordInput, requestingUser: User) {
    const { amount, type, tags, name } = args
    const prisma = getPrismaClient()

    const { newTags, existingTags } = await this.handleTags(requestingUser, prisma, tags)

    return prisma.financialRecord.create({
      data: {
        name,
        amount,
        type: amount < 0 ? FinancialRecordType.EXPENSE : type,
        userId: requestingUser?.id,
        tags: {
          create: newTags,
          connect: existingTags?.map(existingTag => ({ id: existingTag?.id }))
        }
      }
    })
  }

  async update(financialRecord: FinancialRecord, requestingUser: User, newData: UpdateFinancialRecordInput) {
    const { amount, name, type, tags } = newData
    const { id, amount: oldAmount, name: oldName, type: oldType } = financialRecord
    const prisma = getPrismaClient()

    const { newTags, existingTags } = await this.handleTags(requestingUser, prisma, tags)

    return prisma?.financialRecord?.update({
      where: {
        id,
      },
      data: {
        name: name || oldName,
        type: (amount || oldAmount) < 0 ? FinancialRecordType.EXPENSE : type || oldType,
        amount: amount || oldAmount,
        tags: {
          create: newTags,
          connect: existingTags?.map(existingTag => ({ id: existingTag?.id }))
        }
      }
    })
  }

  async handleTags(requestingUser: User, prisma: PrismaClientType, tagsInPayload: string[] = []): Promise<{ newTags: Tag[], existingTags: Tag[] }> {
    const existingTags = await prisma.tag.findMany({
      where: {
        userId: requestingUser?.id,
        name: {
          in: tagsInPayload?.map(tag => tag?.toLowerCase())
        }
      }
    })

    const existingTagsNames = existingTags?.map(existingTag => existingTag?.name)

    const newTags = tagsInPayload?.filter(tagInPayload => !existingTagsNames?.includes(tagInPayload?.toLowerCase()))

    const newTagsData: Tag[] = newTags?.map(newTag => ({
      userId: requestingUser?.id,
      name: newTag?.toLowerCase(),
    }))

    return { newTags: newTagsData, existingTags }
  }

  async list(requestingUser: User) {
    const prisma = getPrismaClient()

    const records = await prisma.financialRecord.findMany({
      where: {
        userId: requestingUser?.id,
      }
    })

    return records
  }

  async delete(financialRecord: FinancialRecord) {
    const prisma = getPrismaClient()

    return prisma?.financialRecord?.delete({
      where: {
        id: financialRecord?.id
      }
    })
  }
}
