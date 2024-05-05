import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class RegisterDto{

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