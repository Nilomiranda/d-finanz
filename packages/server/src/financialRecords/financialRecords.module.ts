import {Module} from "@nestjs/common";
import { TagsModule } from "../tags/tags.module";
import { FinancialRecordsResolver } from "./financialRecords.resolver";
import { FinancialRecordsService } from "./financialRecords.service";

@Module({
  imports: [TagsModule],
  providers: [FinancialRecordsService, FinancialRecordsResolver],
  exports: [FinancialRecordsService],
})
export class FinancialRecordsModule {}
