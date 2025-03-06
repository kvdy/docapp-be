import { IsString, IsNumber, IsEmail } from "class-validator";

export class DirectoryModel {
  @IsString()
  name: string;

  @IsString()
  status: string;

}
