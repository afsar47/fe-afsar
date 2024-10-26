import React, { useMemo, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi'; // Importing the plus icon from react-icons
import DataTable from '@/components/shared/DataTable';

// Define the proper structure for your columns based on ColumnDef
type ColumnDef<T> = {
    header: string;
    accessorKey: keyof T;
    sortable?: boolean;
};

// Define the type of data you will pass in
type VehicleData = {
    color: string;
    year: number;
    make: string;
    model: string;
    mileage: string;
    vin: string;
    licensePlate: string;
    unit: number;
    createdDate: string;
    tags?: string[];
};

const VehiclesTable = () => {
    const [data, setData] = useState<VehicleData[]>([
        
            {
                color: 'Red',
                year: 2021,
                make: 'Toyota',
                model: 'Camry',
                mileage: '25,000 miles',
                vin: '1HGCM82633A123456',
                licensePlate: 'ABC1234',
                unit: 1,
                createdDate: '05/12/2023',
                tags: ['sedan', 'automatic', 'fuel-efficient']
            },
            {
                color: 'Blue',
                year: 2019,
                make: 'Honda',
                model: 'Civic',
                mileage: '45,000 miles',
                vin: '2HGFB2F59CH123789',
                licensePlate: 'XYZ5678',
                unit: 2,
                createdDate: '03/08/2023',
                tags: ['compact', 'manual', 'sporty']
            },
            {
                color: 'Black',
                year: 2022,
                make: 'Ford',
                model: 'Mustang',
                mileage: '10,000 miles',
                vin: '3FA6P0G71HR123456',
                licensePlate: 'LMN8901',
                unit: 3,
                createdDate: '07/22/2023',
                tags: ['coupe', 'automatic', 'performance']
            }
        
        
    ]);

    const [savedTags] = useState<string[]>(['Permanent', 'VIP', 'New', 'Returning']); // List of saved tags
    const [searchTerm, setSearchTerm] = useState<string>(''); // Search term for filtering tags
    const [selectedTags, setSelectedTags] = useState<Record<number, string[]>>({}); // Tags for each Vehicle by index

    const columns: ColumnDef<VehicleData>[] = useMemo(() => [
        { header: 'Color', accessorKey: 'color', sortable: true },
        { header: 'Year', accessorKey: 'year' },
        { header: 'Make', accessorKey: 'make' },
        { header: 'Model', accessorKey: 'model' },
        { header: 'Mileage', accessorKey: 'mileage' },
        { header: 'VIN', accessorKey: 'vin' },
        { header: 'License Plate', accessorKey: 'licensePlate' },
        { header: 'Unit#', accessorKey: 'unit' },
        { header: 'Created Date', accessorKey: 'createdDate' },
        {
            header: 'Tags',
            accessorKey: 'tags',
            // Custom cell renderer to include tag selection
            sortable: false,
            cell: (rowIndex: number) => (
                <div className="relative">
                    {selectedTags[rowIndex]?.map((tag, idx) => (
                        <span key={idx} style={{ marginRight: '8px' }}>
                            {tag} <button onClick={() => handleRemoveTag(rowIndex, tag)} className="ml-1 text-red-500">x</button>
                        </span>
                    ))}
                    {/* Updated Button with Styles */}
                    <button
                        style={{
                            backgroundColor: '#f0f0f0', // light grey background
                            width: '20px', // square shape
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '3px', // square with slightly rounded corners
                            border: '1px solid #fff', // optional border
                            cursor: 'pointer',
                        }}
                        // onClick={() => document.getElementById(`tagDropdown-${rowIndex}`)?.classList.toggle('hidden')}
                    >
                        <HiOutlinePlus size={24} color="#3457D5" /> {/* Blue color and size of the icon */}
                    </button>
                    
                    {/* Compact Dropdown for Tag Selection */}
                    <div
                        id={`tagDropdown-${rowIndex}`}
                        className="hidden absolute z-10 bg-white border border-gray-300 p-2 rounded shadow-md mt-2 w-48"
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="mb-2 p-1 w-full border border-gray-300 rounded text-sm"
                        />
                        <ul className="max-h-32 overflow-y-auto text-sm">
                            {savedTags.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())).map((tag, idx) => (
                                <li key={idx} className="flex items-center mb-1">
                                    <input
                                        type="checkbox"
                                        checked={selectedTags[rowIndex]?.includes(tag) || false}
                                        onChange={() => handleAddTag(rowIndex, tag)}
                                        className="mr-2"
                                    />
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ),
        },
    ], [selectedTags, searchTerm]);

    // Handler for adding a tag
    const handleAddTag = (rowIndex: number, tag: string) => {
        setSelectedTags(prevTags => {
            const newTags = prevTags[rowIndex] ? [...prevTags[rowIndex]] : [];
            if (!newTags.includes(tag)) {
                newTags.push(tag);
            }
            return { ...prevTags, [rowIndex]: newTags };
        });
    };

    // Handler for removing a tag
    const handleRemoveTag = (rowIndex: number, tag: string) => {
        setSelectedTags(prevTags => {
            const newTags = prevTags[rowIndex]?.filter(t => t !== tag) || [];
            return { ...prevTags, [rowIndex]: newTags };
        });
    };

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

export default VehiclesTable;
