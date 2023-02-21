import { Transform } from 'class-transformer';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetEstimateDto {
  @IsString()
  @IsOptional()
  make?: string;

  @IsString()
  @IsOptional()
  model?: string;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1930)
  @Max(2022)
  @IsOptional()
  year?: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(1000)
  @IsOptional()
  mileage?: number;

  @Transform(({ value }) => parseInt(value))
  @IsLongitude()
  @IsOptional()
  lng?: number;

  @Transform(({ value }) => parseInt(value))
  @IsLatitude()
  @IsOptional()
  lat?: number;
}
