// src/dto/user.ts
import { Rule, RuleType } from "@midwayjs/decorator";

export class AdminUserRegisterDTO {
  @Rule(RuleType.string().empty(''))
  name: string;

  @Rule(RuleType.string().email().required())
  email: string;

  @Rule(RuleType.string().empty('').length(11))
  phone: string;

  @Rule(RuleType.string().required())
  password: string;

  @Rule(RuleType.string().empty(''))
  identity: string;
}
