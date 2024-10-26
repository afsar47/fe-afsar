import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDealers, updateDealer } from '@/views/SuperAdmin/dealers/DealerServices';
import { toast } from 'react-toastify'; // Assuming react-toastify is used for showing toasts
import dayjs from 'dayjs';
import { getAllCountAccToStatus, getAllEstimates } from '../Services/WorkflowService';

// Define estimate types
export interface Estimate {
    _id: number;
    orderNo: number;
    orderName: string;
    customer: string;
    total: string;
    dueDate: string;
    paymentTerms: string;
    paymentDueDate: string;
    paidStatus: string;
    workflow: string;
    inspectionStatus: string;
    orderStatus: string;
    auth: string;
    appointment: string;
    technician: string;
    createdDate: number;
    authorizedDate: number;
    invoiceDate: number;
    fullyPaidDate: number;
    workflowDate: number;
    messagedDate: number;
    tags: [];
}

export interface EstimateState {
    estimateList: Estimate[];
    loading: boolean;
    tableData: {
        pageIndex: number;
        pageSize: number;
        sort: string;
        query: string;
        total: number;
    };
    workflowCountAccToStatus: [],
    filterData: {
        status: string;
    };
    drawerOpen: boolean;
    selectedDealer: Estimate | null;
}

// Initial state
const initialState: EstimateState = {
    estimateList: [],
    loading: false,
    tableData: {
        pageIndex: 1,
        pageSize: 10,
        sort: '',
        query: '',
        total: 0,
    },
    workflowCountAccToStatus: [],
    filterData: {
        status: '',
    },
    drawerOpen: false,
    selectedDealer: null,
};

// Async function to fetch estimates
export const getEstimates = (params: any) => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call

        // const response = await getAllEstimates(params);
        const response: any = {
            status: 'success',
            allEstimates: [
                {
                    _id: 1,
                    orderNo: 1001,
                    orderName: "Window Replacement",
                    customer: "John Doe",
                    total: "$1500",
                    dueDate: "2024-09-30",
                    paymentTerms: "Net 30",
                    paymentDueDate: "2024-10-30",
                    paidStatus: "Unpaid",
                    workflow: "In Progress",
                    inspectionStatus: "Pending",
                    orderStatus: "Processing",
                    auth: "Pending",
                    appointment: "2024-09-29",
                    technician: "Jake Wilson",
                    createdDate: 1695859200,
                    authorizedDate: null,
                    invoiceDate: 1695945600,
                    fullyPaidDate: null,
                    workflowDate: 1695945600,
                    messagedDate: 1696032000,
                    tags: ["urgent", "customer-request"]
                },
                {
                    _id: 2,
                    orderNo: 1002,
                    orderName: "Roof Inspection",
                    customer: "Jane Smith",
                    total: "$500",
                    dueDate: "2024-09-28",
                    paymentTerms: "Net 15",
                    paymentDueDate: "2024-10-13",
                    paidStatus: "Paid",
                    workflow: "Estimates",
                    inspectionStatus: "Passed",
                    orderStatus: "Completed",
                    auth: "Authorized",
                    appointment: "2024-09-25",
                    technician: "Sarah Johnson",
                    createdDate: 1695769200,
                    authorizedDate: 1695773200,
                    invoiceDate: 1695862000,
                    fullyPaidDate: 1695862200,
                    workflowDate: 1695863000,
                    messagedDate: 1695864000,
                    tags: ["completed", "priority"]
                },
                {
                    _id: 3,
                    orderNo: 1003,
                    orderName: "HVAC Maintenance",
                    customer: "Michael Brown",
                    total: "$2000",
                    dueDate: "2024-09-30",
                    paymentTerms: "Net 45",
                    paymentDueDate: "2024-11-14",
                    paidStatus: "Partially Paid",
                    workflow: "Dropped Off",
                    inspectionStatus: "Not Started",
                    orderStatus: "Pending",
                    auth: "Pending",
                    appointment: "2024-09-29",
                    technician: "Alice Cooper",
                    createdDate: 1695759200,
                    authorizedDate: null,
                    invoiceDate: 1695852200,
                    fullyPaidDate: null,
                    workflowDate: 1695948200,
                    messagedDate: 1695960000,
                    tags: ["scheduled", "follow-up"]
                },
                {
                    _id: 4,
                    orderNo: 1003,
                    orderName: "HVAC Maintenance",
                    customer: "Michael Brown",
                    total: "$2000",
                    dueDate: "2024-09-30",
                    paymentTerms: "Net 45",
                    paymentDueDate: "2024-11-14",
                    paidStatus: "Partially Paid",
                    workflow: "In Progress",
                    inspectionStatus: "Not Started",
                    orderStatus: "Pending",
                    auth: "Pending",
                    appointment: "2024-09-29",
                    technician: "Alice Cooper",
                    createdDate: 1695759200,
                    authorizedDate: null,
                    invoiceDate: 1695852200,
                    fullyPaidDate: null,
                    workflowDate: 1695948200,
                    messagedDate: 1695960000,
                    tags: ["scheduled", "follow-up"]
                },
                {
                    _id: 5,
                    orderNo: 1003,
                    orderName: "HVAC Maintenance",
                    customer: "Michael Brown",
                    total: "$2000",
                    dueDate: "2024-09-30",
                    paymentTerms: "Net 45",
                    paymentDueDate: "2024-11-14",
                    paidStatus: "Partially Paid",
                    workflow: "Invoices",
                    inspectionStatus: "Not Started",
                    orderStatus: "Pending",
                    auth: "Pending",
                    appointment: "2024-09-29",
                    technician: "Alice Cooper",
                    createdDate: 1695759200,
                    authorizedDate: null,
                    invoiceDate: 1695852200,
                    fullyPaidDate: null,
                    workflowDate: 1695948200,
                    messagedDate: 1695960000,
                    tags: ["scheduled", "follow-up"]
                }
            ]
        }
        if (response.status === 'success') {
            const estimates = response.allEstimates.map((estimate: Estimate) => ({
                id: estimate._id,
                orderNo: estimate.orderNo,
                orderName: estimate.orderName,
                customer: estimate.customer,
                total: estimate.total, // Map status accordingly
                dueDate: estimate.dueDate,
                paymentTerms: estimate.paymentTerms,
                paymentDueDate: estimate.paymentDueDate,
                paidStatus: estimate.paidStatus,
                workflow: estimate.workflow,
                inspectionStatus: estimate.inspectionStatus,
                orderStatus: estimate.orderStatus,
                auth: estimate.auth,
                appointment: estimate.appointment,
                technician: estimate.technician,
                createdDate: dayjs(estimate.createdDate).unix(),
                authorizedDate: dayjs(estimate.authorizedDate).unix(),
                invoiceDate: dayjs(estimate.invoiceDate).unix(),
                fullyPaidDate: dayjs(estimate.fullyPaidDate).unix(),
                workflowDate: dayjs(estimate.workflowDate).unix(),
                messagedDate: dayjs(estimate.messagedDate).unix(),
                tags: estimate.tags,
            }));
            dispatch(setAllEstimatesList(estimates));
            // Update table data (such as pagination and total)
            dispatch(
                setTableData({
                    total: estimates.length, // Adjust this if needed
                    ...params, // Use other pagination params
                })
            );
        } else {
            toast.error('Failed to fetch estimates.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching estimates.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};

export const getWorkflowTableCount = () => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call
        // const response = await getAllCountAccToStatus();
        const response = {
            status: 'success',
            allCountAccToStatus: {
                all: {
                    id: 1,
                    statusName: 'All',
                    statusCount: 4
                },
                estimates: {
                    id: 2,
                    statusName: 'Estimates',
                    statusCount: 2
                },
                droppedOff: {
                    id: 3,
                    statusName: 'Dropped Off',
                    statusCount: 0
                },
                inProgress: {
                    id: 4,
                    statusName: 'In Progress',
                    statusCount: 0
                },
                invoices: {
                    id: 5,
                    statusName: 'Invoices',
                    statusCount: 0
                }
            }
        }

        if (response.status === 'success') {
            const allCountAccToStatus: any = response.allCountAccToStatus
            dispatch(setAllCountAccToStatus(allCountAccToStatus));
        } else {
            toast.error('Failed to fetch counts.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching counts.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
}

// Async function to update a estimate
export const putDealer = (estimate: Estimate) => async (dispatch: any) => {
    try {
        dispatch(setLoading(true));

        const response = await updateDealer(estimate._id, estimate);

        if (response.data.status === 'success') {
            toast.success('Estimate updated successfully!');
            // You can also dispatch an action to update the estimate in the state if needed.
        } else {
            toast.error('Failed to update the estimate.');
        }
    } catch (error) {
        toast.error('An error occurred while updating the estimate.');
    } finally {
        dispatch(setLoading(false));
    }
};

const estimateSlice = createSlice({
    name: 'allEstimates',
    initialState,
    reducers: {
        setTableData: (state, action: PayloadAction<EstimateState['tableData']>) => {
            state.tableData = action.payload;
        },
        setFilterData: (state, action: PayloadAction<EstimateState['filterData']>) => {
            state.filterData = action.payload;
        },
        setAllEstimatesList: (state, action: PayloadAction<Estimate[]>) => {
            state.estimateList = action.payload;
        },
        setAllCountAccToStatus: (state, action: PayloadAction<EstimateState['workflowCountAccToStatus']>) => {
            state.workflowCountAccToStatus = action.payload;
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true;
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false;
        },
        setSelectedDealer: (state, action: PayloadAction<Estimate | null>) => {
            state.selectedDealer = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setTableData,
    setFilterData,
    setAllEstimatesList,
    setDrawerOpen,
    setAllCountAccToStatus,
    setDrawerClose,
    setSelectedDealer,
    setLoading,
} = estimateSlice.actions;

export default estimateSlice.reducer;