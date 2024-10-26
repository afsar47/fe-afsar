import { useState, useMemo } from 'react';
import DataTable from '@/components/shared/DataTable';
import type { ColumnDef, OnSortParam } from '@/components/shared/DataTable';
import { useFormik } from 'formik';
import SelectAndButton from '@/components/ui/SelectAndButton';
import { Button } from '@/components/ui';
import { GrCubes } from "react-icons/gr";
import { HiPlusCircle } from 'react-icons/hi';
import handleButtonClick from '../DealerInventory/Tires/TiresStatistics';
import TiresTableTools from '../DealerInventory/Tires/TiresTableTools'; // Import TiresTableTools component

type PurchaseOrder = {
    id: string;
    createdDate: string;
    order: string;
    notes: string;
    dealer: string; // Changed from vendor to dealer
    invoiceNum: string;
    items: number;
    total: string;
    status: string;
};

const PurchaseOrderPage = () => {
    const [tableData, setTableData] = useState<{
        pageIndex: number;
        pageSize: number;
        sort: {
            order: '' | 'asc' | 'desc';
            key: string | number;
        };
        query: string;
        total: number;
    }>({
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        query: '',
        sort: {
            order: '',
            key: '',
        },
    });

    // const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isReceived, setIsReceived] = useState(false); // State for received button
    const [note, setNote] = useState(''); // State for note input
    const [isNoteOpen, setIsNoteOpen] = useState(false); // Stat

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            poNumber: '',
            status: 'Draft', // Set initial status to Draft
            dealer: '',
            workOrder: '',
            DealerInvoiceNumber: '',
            box: '',
        },
        onSubmit: (values) => {
            // Handle form submission
            console.log('Form data', values);
            closeModal(); // Close modal after submission
        },
    });

    const WorkOrderOptions = [
        { value: 'WorkOrder 1', label: 'WorkOrder 1' },
        { value: 'WorkOrder 2', label: 'WorkOrder 2' },
    ];
    
    const DealerOptions = [
        { value: 'dealer 1', label: 'Dealer 1' },
        { value: 'dealer 2', label: 'Dealer 2' },
    ];

    // Hardcoded data
    const data: PurchaseOrder[] = [
        { id: 'PO123', createdDate: '2024-10-01', order: 'Order123', notes: 'Sample notes', dealer: 'Dealer A', invoiceNum: 'INV001', items: 3, total: '$200', status: 'Draft' },
        { id: 'PO124', createdDate: '2024-10-02', order: 'Order124', notes: 'Sample notes', dealer: 'Dealer B', invoiceNum: 'INV002', items: 2, total: '$150', status: 'Cancelled' },
        // Other data entries can remain the same or be updated accordingly
    ];

    const columns: ColumnDef<PurchaseOrder>[] = useMemo(() => {
        return [
            {
                header: 'PO #',
                accessorKey: 'id',
            },
            {
                header: 'Created Date',
                accessorKey: 'createdDate',
            },
            {
                header: 'Order',
                accessorKey: 'order',
            },
            {
                header: 'Notes',
                accessorKey: 'notes',
            },
            {
                header: 'Dealer', // Changed from Vendor to Dealer
                accessorKey: 'dealer',
            },
            {
                header: 'Invoice Num',
                accessorKey: 'invoiceNum',
            },
            {
                header: 'Items',
                accessorKey: 'items',
            },
            {
                header: 'Total',
                accessorKey: 'total',
            },
            {
                header: 'Status',
                accessorKey: 'status',
            },
        ];
    }, []);

    const handlePaginationChange = (pageIndex: number) => {
        setTableData((prevData) => ({ ...prevData, pageIndex }));
    };

    const handleSelectChange = (pageSize: number) => {
        setTableData((prevData) => ({ ...prevData, pageSize }));
    };

    const handleSort = ({ order, key }: OnSortParam) => {
        setTableData((prevData) => ({
            ...prevData,
            sort: { order, key },
        }));
    };
    const toggleNoteBox = () => {
        setIsNoteOpen(!isNoteOpen);
    };
    const handleOrderReceived = () => {
        setIsReceived(!isReceived);
    };
    function setFieldValue(arg0: string, value: unknown): void {
        throw new Error('Function not implemented.');
    }

    function setAddCustomerModalOpen(arg0: boolean) {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="p-6 min-h-screen">
            {/* Header section */}
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Purchase Order</h1>
                <Button
                    variant="solid"
                    type="button"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-1 px-3 py-1.5"
                    onClick={openModal}
                >
                    <HiPlusCircle className="h-4 w-4" />
                    New Purchase order
                </Button>
            </div>

            {/* Tools Section */}
            <TiresTableTools /> {/* Add the tools component here */}

            {/* Table Section */}
            <div className="overflow-x-auto">
                <DataTable<PurchaseOrder>
                    columns={columns}
                    data={data}
                    loading={false} // No loading since we're using hardcoded data
                    pagingData={{
                        total: data.length, // Total from hardcoded data
                        pageIndex: tableData.pageIndex,
                        pageSize: tableData.pageSize,
                    }}
                    onPaginationChange={handlePaginationChange}
                    onSelectChange={handleSelectChange}
                    onSort={handleSort}
                />
            </div>
            

            {/* Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-[1200px] max-h-[90vh] overflow-y-auto"> {/* Increased width and added scrollable behavior */}
                        <h2 className="text-2xl font-semibold mb-4">New Purchase Order</h2>
                        <div className="border-b border-gray-300 mb-4" /> {/* Line under the heading */}
                        <form onSubmit={formik.handleSubmit} className="space-y-4">
                            {/* Flex container for side-by-side layout */}
                            <div className="flex space-x-4"> {/* Adjusted space between fields */}
                                <div className="flex-1">
                                    <label className="block">PO Number</label>
                                    <input
                                        type="text"
                                        name="poNumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.poNumber}
                                        className="input border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block">Status</label>
                                    <select
                                        name="status"
                                        onChange={formik.handleChange}
                                        value={formik.values.status}
                                        className="input border border-gray-300 p-2 w-full"
                                    >
                                        <option value="Draft">Draft</option>
                                        <option value="Cancelled">Cancelled</option> {/* Updated to include only Draft and Cancelled */}
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block">Dealer</label>
                                    <SelectAndButton
                                        options={DealerOptions}
                                        addNewButtonLabel="Add New Dealer"
                                        onChange={(value) => setFieldValue('dealer', value)}
                                        placeholder="Select or Add Dealer"
                                        addNewClick={() => setAddCustomerModalOpen(true)}
                                        className="mb-4"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block">Dealer Invoice Number</label>
                                    <input
                                        type="text"
                                        name="DealerInvoiceNumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.DealerInvoiceNumber}
                                        className="input border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                 {/* Total Section on the right */}
          <div className="flex-1 flex flex-col justify-end items-end">
            <div className="text-right">
              <h3 className="text-lg font-semibold">Total</h3>
              <p className="text-xl font-bold">$0.00</p>
            </div>
          </div>
                            </div>
                            <div className='w-1/2'>
                            <label className="block">Work Order</label>
                            <SelectAndButton
                                        options={WorkOrderOptions}
                                        addNewButtonLabel="Add Work Order"
                                        onChange={(value) => setFieldValue('customer', value)}
                                        placeholder="Select or Add Work Order"
                                        addNewClick={() => setAddCustomerModalOpen(true)}
                                        className="mb-4"
                                    />
                            </div>
                            <div className="flex justify-between items-center">
                            {/* Add Note Button */}
                            <Button 
                                type="button" 
                                className="bg-transparent border-0 !text-blue-500"
                                onClick={toggleNoteBox}
                            >
                                {isNoteOpen ? "Hide Note" : "Add Note"}
                            </Button>
                            
                          {/* Mark as Ordered Button */}
                            <Button
                                type="button"
                                className="bg-transparent !border-blue-500 !text-blue-500"
                                onClick={handleOrderReceived}
                            >
                                {isReceived ? "Ordered" : "Mark as Ordered"}
                            </Button>


                            </div>
                            {isNoteOpen && (
                                <div className="mt-4">
                                    <textarea
                                        rows={4}
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        placeholder="Add a note..."
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                            )}

                            {/* Silver line after notes */}
                            <div className="border-b border-gray-300 mb-4" />
                            <div className="relative">
                            <div className="input border border-gray-300 w-full h-60 flex flex-col justify-center items-center text-center" style={{ resize: 'none' }}>
                                <GrCubes size={50} />
                                <p>Add Parts or Tires to get started</p>
                                <div className="flex space-x-2 justify-center">
                                    <button
                                        type="button"
                                        className="bg-transparent text-blue-500 border-0 hover:underline"
                                        onClick={() => {/* Add your add parts logic here */}}
                                    >
                                        Add Parts
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-transparent text-blue-500 border-0 hover:underline"
                                        onClick={handleButtonClick}
                                    >
                                        Add Tires
                                    </button>
                                </div>
                            </div>
                        </div>      
                            {/* Buttons container with box */}
                            <div className="flex  justify-end space-x-2">
                            <Button type="submit" className="!bg-blue-500 !text-gray-50">
                                    Save
                                </Button>
                                <Button type="button" onClick={closeModal} className="bg-gray-300 hover:bg-gray-400">
                                    Cancel
                                </Button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PurchaseOrderPage;
