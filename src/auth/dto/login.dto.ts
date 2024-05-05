import { IsNotEmpty, IsString, Length , IsEmail } from "class-validator";

export class LoginDto{

    @IsString()
    @IsEmail()
    @IsNotEmpty({
        message:"Zorunlu alan lütfen doldurunuz !"
    })
    email:string

    @IsString()
    @IsNotEmpty()
    @Length(6,100,{
        message:"Şifreniz En az 6 karakterden veya en fazla 100 karakterden oluşturulabilir."

    })
    password:string



}