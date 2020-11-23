namespace Demo.Northwind {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'Demo.Northwind.Gender', 'Demo.Northwind.Entities.Gender');
}
