export class CreateStepDto {
    id: number;
    title: string;
    priority:number;
    StepDetail :[];  
  }

  export class StepDetail {
    priority: number; 
    title: string; 
    isCompleted: boolean;
}