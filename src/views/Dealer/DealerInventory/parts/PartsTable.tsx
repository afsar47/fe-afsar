import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from '@/components/shared/DataTable';
import { getParts, setDrawerOpen, setSelectedDealer, setTableData, useAppDispatch, useAppSelector } from '../store';
import { cloneDeep } from 'lodash';
import useThemeClass from '@/utils/hooks/useThemeClass';

// Define the proper structure for your columns based on ColumnDef
type ColumnDef<T> = {
    header: string;
    accessorKey: keyof T; // Change selector to match the keys in data
    sortable?: boolean; // Optional, as not all columns are sortable
};

// Define the type of data you will pass in
type PartData = {
    partName: string;
    brand: string;
    partSku: string;
    partSerialNo: number;
    category: string;
    dealer: string;
    cost: number;
    retail: number;
    available: number;
    reserved: number;
    onHand: number;
    minQuantity: number;
    maxQuantity: number;
};

const PartsTable = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.inventory.allParts);
    const loading = useAppSelector((state) => state.inventory.loading);
    const filterData = useAppSelector((state) => state.inventory.filterData);

    const { pageIndex, pageSize, sort, query, total } = useAppSelector(
        (state) => state.inventory.tableData
    );


    const fetchData = useCallback(() => {
        dispatch(getParts({ pageIndex, pageSize, sort, query, filterData }))
    }, [pageIndex, pageSize, sort, query, filterData, dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData, pageIndex, pageSize, sort, filterData])

    const tableData = useMemo(
        () => ({ pageIndex, pageSize, sort, query, total, filterData }),
        [pageIndex, pageSize, sort, query, total]
    )

    console.log(tableData);
    const ActionColumn = ({ row }: { row: any }) => {
        const { textTheme } = useThemeClass()
        const dispatch = useAppDispatch()
    
        const onEdit = () => {
            dispatch(setDrawerOpen())
            dispatch(setSelectedDealer(row))
        }
    
        return (
            <div
                className={`${textTheme} cursor-pointer select-none font-semibold`}
                onClick={onEdit}
            >
                Edit
            </div>
        )
    }

    const columns: ColumnDef<PartData>[] = useMemo(() => [
        { header: 'Name', accessorKey: 'partName', sortable: true },
        { header: 'Brand', accessorKey: 'brand' },
        { header: 'SKU', accessorKey: 'partSku' },
        { header: 'Part', accessorKey: 'partSerialNo' },
        { header: 'Category', accessorKey: 'category' },
        { header: 'Vendor', accessorKey: 'vendor' },
        { header: 'Cost', accessorKey: 'cost' },
        { header: 'Retail', accessorKey: 'retail' },
        { header: 'Available', accessorKey: 'available' },
        { header: 'Reserved', accessorKey: 'reserved' },
        { header: 'On Hand', accessorKey: 'available' },
        { header: 'Min', accessorKey: 'minQuantity' },
        { header: 'Max', accessorKey: 'maxQuantity' },
        {
            header: 'Action',
            id: 'action',
            cell: (props: any) => <ActionColumn row={props.row.original} />,
        },
    ], []);

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        debugger
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }

    const onSort = (sort: any) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        dispatch(setTableData(newTableData))
    }

    return (
        <DataTable
            columns={columns}
            data={data}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={loading}
            pagingData={{
                total: tableData.total as number,
                pageIndex: tableData.pageIndex as number,
                pageSize: tableData.pageSize as number,
            }}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            onSort={onSort}
        />
    );
};

export default PartsTable;
