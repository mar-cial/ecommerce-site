export type ModeloDeProducto = {
    id: number;
    title: string;
    price: number;
    amount: number;
    description: string;
    category: Category;
    image: string;
};

export enum Category {
    Electronics = 'electronics',
    Jewelery = 'jewelery',
    MenClothing = 'men clothing',
    WomenClothing = 'women clothing',
}

export type ItemProps = {
    producto: ModeloDeProducto;
    agregarAlCarro: (productoSeleccionado: ModeloDeProducto) => void;
};

export type CartProps = {
    itemsCarro: ModeloDeProducto[];
    agregarAlCarro: (productoSeleccionado: ModeloDeProducto) => void;
    eliminarDelCarro: (id: number) => void;
};

export type CartItemProps = {
    item: ModeloDeProducto;
    agregarAlCarro: (productoSeleccionado: ModeloDeProducto) => void;
    eliminarDelCarro: (id: number) => void;
};
