import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument, TokenSchema } from './schemas';
import * as mongoose from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/users.schema';
import { LoginDto, RegisterDto } from './dto';
import * as bcrypt from 'bcrypt';
import { IJwtPayload } from './interfaces';
import { JwtService } from '@nestjs/jwt';
import { Step, StepDocument } from 'src/steps/schemas/steps.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Token.name) private tokenModel: mongoose.Model<TokenDocument>,
    @InjectModel(User.name) private userModel: mongoose.Model<UserDocument>,
    @InjectModel(Step.name) private stepModel: mongoose.Model<StepDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hash = await this.hashData(registerDto.password);

    console.log('Register DTO: ' + registerDto);

    const userCheck = await this.userModel.findOne({
      email: registerDto.email,
    });

    if (userCheck)
      throw new BadRequestException('Kullanıcı Sistemde Kayıtlı !');

    const steps = await this.stepModel.find();
    console.log('steps:', steps);
    const newUser = new this.userModel({
      email: registerDto.email,
      password: hash,
      steps,
    });

    await newUser.save().catch((error) => {
      throw new BadRequestException(error);
    });

    return {
      result: 'Kayıt Eklendi ...',
    };
  }

  async hashData(data: string) {
    //password hash
    return await bcrypt.hash(data, 10);
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({email});

    //Kullamıcı Var mı?
    if (!user)
      throw new UnauthorizedException('Kayıtlı Kullanıcı Bulunamadı.. ');

    //Şifre Kontrolü
    const comparePassword = await this.compareData(password, user.password);

    console.log('Compare Password: ' + comparePassword);

    if (!comparePassword)
      throw new UnauthorizedException('Şifre Yanlış Girilmiştir..');

    //token oluşturma
    const userId = user._id;
    const token = await this.createToken({ userId });

    console.log('Token: ' + token);
    console.log(userId);
    console.log(typeof userId);

    await this.tokenModel.findOneAndUpdate(
      {
        userId: new mongoose.Types.ObjectId(String(userId)),
        //userId: new mongoose.Types.ObjectId(String(userId)),
      },
      {
        //eğer varsa token güncelleniyor
        $set: {
          token,
        },
      },
      {
        //Yoksa ekle varsa güncelle
        upsert: true,
        new: true,
      },
    );

    return {
      token,
    };
  }

  async compareData(password: string, comparePassword: string) {
    return await bcrypt.compare(password, comparePassword);
  }
  async createToken(payload: IJwtPayload) {
    //token oluşturma
    const token = await this.jwtService.sign(payload);

    return token;
  }

  async userInfo(userId: IJwtPayload) {
    //const user = await this.userModel.findById(userId).select('email');
    const user = await this.userModel.findById(userId);
    console.log("ME USER"+ user)
    return user;
  }
}
