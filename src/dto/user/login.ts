// src/dto/user.ts
import { Rule, RuleType } from "@midwayjs/decorator";

export class AdminUserLoginDTO {
  @Rule(RuleType.string().email().required())
  email: string;

  @Rule(RuleType.string().required())
  password: string;

}
