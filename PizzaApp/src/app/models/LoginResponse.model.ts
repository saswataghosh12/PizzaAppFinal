import { ResponseModel } from "./ResponseModel.model";
import { User } from "./User.model";

export class LoginResponse extends ResponseModel  
{
    user?: User;
    constructor(){
        super();
    }
}