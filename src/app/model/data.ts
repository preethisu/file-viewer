export class Data {
    first_name:string;
    sur_name:string;
    issue_count:number;	
    date_of_birth:string;

    constructor(){
/*this.date_of_birth = json.
this.first_name
this.sur_name
this.issue_count  */
    }

    toString(){
       return ("first name:: "+this.first_name+ "\n sur name:"+this.sur_name
       +'\n issue :'+this.issue_count +"\n date of birth"+this.date_of_birth) ;
    }
}
