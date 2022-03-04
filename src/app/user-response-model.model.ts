export class UserResponseModel {
    id: number | undefined;
    mobileNumber: string | undefined;
    name: string | undefined;
    password: string | undefined;
    email: string | undefined;
    dob: string | undefined;
    contacts: Array<Contacts> = [];

}
export class Contacts {
    
}