import {Module} from "@nestjs/common";
import {SessionsResolver} from "./sessions.resolver";
import {SessionsService} from "./sessions.service";

@Module({
  imports: [],
  providers: [SessionsService, SessionsResolver],
  exports: [SessionsService],
})
export class SessionsModule {}
