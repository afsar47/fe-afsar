import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDealers, updateDealer } from '@/views/SuperAdmin/dealers/DealerServices';
import { toast } from 'react-toastify'; // Assuming react-toastify is used for showing toasts
import dayjs from 'dayjs';
import { getAllVendors } from '../Services/DealerListServices';

// Define dealer types
export interface Vendor {
    id: number;
    vendorName: string;
    vendorUrl: string;
    vendorAccountNumber: number;
    vendorCountry: string;
    vendorAddress1: string;
    vendorAddress2: string;
    vendorCity: string;
    vendorState: string;
    vendorZipCode: number;
    vendorContactPerson: {
        firstName: string;
        lastName: string;
        contactType: string;
        contactNumber: string;
        email: string;
    }
}

export interface DealerListState {
    allVendors: Vendor[];
    loading: boolean;
    vendorTableData: {
        pageIndex: number;
        pageSize: number;
        sort: string;
        query: string;
        total: number;
    };
    filterData: {
        status: string;
    };
    filterVendorData: {
        status: string;
    };
    drawerOpen: boolean;
    selectedDealer: Vendor | null;
}

// Initial state
const initialState: DealerListState = {
    allVendors: [],
    loading: false,
    vendorTableData: {
        pageIndex: 1,
        pageSize: 10,
        sort: '',
        query: '',
        total: 0,
    },
    filterVendorData: {
        status: '',
    },
    filterData: {
        status: '',
    },
    drawerOpen: false,
    selectedDealer: null,
};

// Async function to fetch dealers

export const getVendors = (params: any) => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call

        const response = await getAllVendors();
        if (response.status === 'success') {
            const vendors = response.allVendors.map((vendor: any) => (vendor));

            dispatch(setAllVendors(vendors));
        } else {
            toast.error('Failed to fetch parts.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching parts.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};

const DealerListSlice = createSlice({
    name: 'allVendors',
    initialState,
    reducers: {
        setAllVendors: (state, action: PayloadAction<DealerListState['allVendors']>) => {
            state.allVendors = action.payload;
        },
        setFilterData: (state, action: PayloadAction<DealerListState['filterData']>) => {
            state.filterData = action.payload;
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true;
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false;
        },
        // setSelectedDealer: (state, action: PayloadAction<Vendor | null>) => {
        //     state.selectedDealer = action.payload;
        // },
        setSelectedDealer: (state, action) => {
            state.selectedDealer = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setAllVendors,
    setFilterData,
    setDrawerOpen,
    setDrawerClose,
    setSelectedDealer,
    setLoading,
} = DealerListSlice.actions;

export default DealerListSlice.reducer;