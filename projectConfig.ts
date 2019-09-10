export class ProjectConfig {

    configId:number;
    projectId:number;
    role:number;
    location:string;
    perHourBilling:number;
    
    constructor(configId:number,projectId:number,role:number,location:string,perHourBilling:number){
        this.configId = configId;
        this.projectId = projectId;
        this.role = role;
        this.location = location;
        this.perHourBilling = perHourBilling;
    }
}