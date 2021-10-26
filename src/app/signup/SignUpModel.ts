export class SignupModel{
    constructor( 
        public fname: String | null,
        public lname: String | null,
        public mobnumber: String | null,
        public designation: String | null,
        public email: String | null,
        public password: String | null,
        public confirmpwd: String | null,
        public regid:String | null,
        public confstatus: String| null){}
}