import { IsString, IsNumber, IsEmail } from "class-validator";

export class DocumentModel {
  @IsString()
  title: string;

  @IsString()
  filepath: string;

  @IsString()
  ownerid: string;

  @IsString()
  directory: string;

  @IsString()
  status: string;
}
