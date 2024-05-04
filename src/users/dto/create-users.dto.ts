import { Faq  } from '../../faq/schemas/faq.schema';
export class CreatePersonDto {
    id: number;
    fullName: string;
    email:string;
    password:string;
    userFavoriteFaqs: string[];
    stepsId: number;
  }
  