// src/dto/user.ts
import { Rule, RuleType } from "@midwayjs/decorator";

export class AdminUserLoginDTO {
  @Rule(RuleType.string().required())
  name: string;

  @Rule(RuleType.string().required())
  password: string;

}
