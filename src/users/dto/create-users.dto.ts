import { Faq  } from '../../faq/schemas/faq.schema';
//import { Step } from 'src/steps/schemas/steps.schema';
import { CreateStepDto } from 'src/steps/dto/create-steps.dto';
export class CreatePersonDto {
    id: number;
    fullName: string;
    email:string;
    password:string;
    userFavoriteFaqs: string[];
    userStepsId: string[];
  }
  