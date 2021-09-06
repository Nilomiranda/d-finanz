import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from "path";
import {UsersModule} from "./users/users.module";
import {SessionsModule} from "./sessions/sessions.module";
import { FinancialRecordsModule } from './financialRecords/financialRecords.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    SessionsModule,
    FinancialRecordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
