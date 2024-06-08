import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export class LoginDto {
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
      'Şifreniz en az 6 karakterden ve en fazla 100 karakterden oluşmalıdır.',
  })
  password: string;
}
