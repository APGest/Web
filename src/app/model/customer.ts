export class Customer {
    name: string;
    surName: string;
    phoneNumber: number;
    address: string;
    constructor( name?: string, surName?: string, phoneNumber?: number, address?: string) {
        this.name = name;
        this.surName = surName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
