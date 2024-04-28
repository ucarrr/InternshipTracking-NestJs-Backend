export class CreateStepDto {
    id: number;
    title: string;
    priority:number;
    stepDetails :StepDetailDto[];   
  
  }
  
  export class StepDetailDto {
    id: number;
    priority: number;
    title: string;
    isDone: boolean;
  }