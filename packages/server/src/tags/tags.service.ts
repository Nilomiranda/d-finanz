import { getPrismaClient } from "../main";

export class TagsService {
  async findByFinancialRecordId(id: string) {
    const prisma = getPrismaClient()

    const tags = await prisma.tag.findMany({
      where: {
        financialRecords: {
          some: {
            id
          }
        }
      }
    })

    return tags
  }
}
