import React, { useMemo, useState } from 'react';
import DataTable from '@/components/shared/DataTable';

// Define the proper structure for your columns based on ColumnDef
type ColumnDef<T> = {
    header: string;
    accessorKey: keyof T; // Change selector to match the keys in data
    sortable?: boolean; // Optional, as not all columns are sortable
};

// Define the type of data you will pass in
type TireData = {
    name: string;
    brand: string;
    partSku: string;
    category: string;
    dealer: string;
    cost:number;
    retail:number;
    available:number;
    reserved:number;
    onHand:number;
    min:number;
    max:number;
};

const TiresTable = () => {
    const [data, setData] = useState<TireData[]>([
        { name: 'Roberts', brand: 'Michelin', partSku: 'POSSIMUS PORRO QUO', category: 'Tyre', dealer: 'Dealer 1', cost:45, retail:20, available:17, reserved: 15, onHand: 3, min: 1, max:30 },
        // Add more part data here
    ]);

    const columns: ColumnDef<TireData>[] = useMemo(() => [
        { header: 'Name', accessorKey: 'name', sortable: true },
        { header: 'Brand', accessorKey: 'brand' },
        { header: 'SKU', accessorKey: 'partSku' },
        { header: 'Category', accessorKey: 'category' },
        { header: 'Dealer', accessorKey: 'dealer' },
        { header: 'Cost', accessorKey: 'cost' },
        { header: 'Retail', accessorKey: 'retail' },
        { header: 'Available', accessorKey: 'available' },
        { header: 'Reserved', accessorKey: 'reserved' },
        { header: 'On Hand', accessorKey: 'onHand' },
        { header: 'Min', accessorKey: 'min' },
        { header: 'Max', accessorKey: 'max' },
    ], []);

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

export default TiresTable;
