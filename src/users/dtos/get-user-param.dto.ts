import { Transform, Type } from "class-transformer";
import { IsBoolean } from "class-validator";

export class GetUserParamDto {
    @IsBoolean()
    @Transform(({ value }) => value == "true")
    isMarried!: boolean;
}