import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @Transform(({ value }) => value.toLowerCase())
  @IsString()
  @IsEmail({}, { message: 'Geçerli bir e-posta adresi giriniz.' })
  @IsNotEmpty({
    message: 'E-posta alanı zorunludur.',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Şifre alanı zorunludur.' })
  @Length(6, 100, {
    message:
      'Şifreniz En az 6 karakterden veya en fazla 100 karakterden oluşturulabilir.',
  })
  password: string;
}
