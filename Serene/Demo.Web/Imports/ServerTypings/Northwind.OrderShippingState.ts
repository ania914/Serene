namespace Demo.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Demo.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
