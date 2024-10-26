import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllDealers, updateDealer } from '@/views/SuperAdmin/dealers/DealerServices';
import { toast } from 'react-toastify'; // Assuming react-toastify is used for showing toasts
import dayjs from 'dayjs';
import { apiGetAllBrand, apiGetAllCategtories, apiGetAllVendor, getAllParts } from '../../DealerLists/Services/DealerInventoryServices';

// Define dealer types
export interface Dealer {
    id: number;
    fullname: string;
    username: string;
    email: string;
    phoneNumber: string;
    status: boolean;
    lastOnline: number;
    businessInfo?: {
        companyName: string;
        address: string;
        phoneNumber: string;
        website: string;
    };
}

export interface InventoryState {
    allParts: Dealer[];
    loading: boolean;
    tableData: {
        pageIndex: number;
        pageSize: number;
        sort: string;
        query: string;
        total: number;
    };
    filterData: {
        status: string;
    };
    drawerOpen: boolean;
    selectedDealer: Dealer | null;
}

export interface InventoryState {
    allBrands: any[];
    allVendors: any[];
    allCategories: any[];
}

// Initial state
const initialState: InventoryState = {
    allParts: [],
    allBrands: [],
    allVendors: [],
    allCategories: [],
    loading: false,
    tableData: {
        pageIndex: 1,
        pageSize: 10,
        sort: '',
        query: '',
        total: 0,
    },
    filterData: {
        status: '',
    },
    drawerOpen: false,
    selectedDealer: null,
};
// Async function to fetch all parts
export const getParts = (params: any) => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call

        const response = await getAllParts();
        if (response.status === 'success') {
            const parts = response.allParts.map((part: any) => ({
                id: part._id,
                partName: part.partName, // This should be changed
                brand: part?.brand?.label,
                partSku: part.partSku,
                note: part.note,
                partSerialNo: part.partSerialNo,
                category: part?.category?.categoryName,
                dealer: part.dealer,
                vendor: part.vendor.vendorName,
                cost: part.cost,
                retail: part.retail,
                reserved: part.reserved,
                onHand: part.onHand,
                available: part.quantity,
                minQuantity: part.minQuantity,
                maxQuantity: part.maxQuantity,
            }));

            dispatch(setPartsList(parts));

            // Update table data (such as pagination and total)
            dispatch(
                setTableData({
                    total: parts.length, // Adjust this if needed
                    ...params, // Use other pagination params
                })
            );
        } else {
            toast.error('Failed to fetch parts.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching parts.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};


// Async function to fetch all parts
export const getAllBrands = () => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call

        const response = await apiGetAllBrand();
        if (response.status === 'success') {
            const allBrands = response.allBrands.map((brand: any) => ({
                value: brand._id,
                label: brand.label
            }));

            dispatch(setAllBrandsData(allBrands));
        } else {
            toast.error('Failed to fetch all brands.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching all brands.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};

// Async function to fetch all parts
export const getAllVendors = () => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call
        const response = await apiGetAllVendor();
        if (response.status === 'success') {
            const allVendors = response.allVendors.map((vendor: any) => ({
                value: vendor._id,
                label: vendor.vendorName
            }));
            dispatch(setAllVendorsData(allVendors));
        } else {
            toast.error('Failed to fetch all brands.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching all brands.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};


// Async function to fetch all parts
export const getAllCategtories = () => async (dispatch: any) => {
    try {
        dispatch(setLoading(true)); // Set loading to true before the API call

        const response = await apiGetAllCategtories();
        if (response.status === 'success') {
            const allCategories = response.allCategories.map((category: any) => ({
                value: category._id,
                label: category.categoryName
            }));

            dispatch(setAllCategoriesData(allCategories));
        } else {
            toast.error('Failed to fetch all categories.');
        }
    } catch (error) {
        toast.error('An error occurred while fetching all categories.');
    } finally {
        dispatch(setLoading(false)); // Set loading to false after API call
    }
};


const InventorySlice = createSlice({
    name: 'allParts',
    initialState,
    reducers: {
        setTableData: (state, action: PayloadAction<InventoryState['tableData']>) => {
            state.tableData = action.payload;
        },
        setAllBrandsData: (state, action: PayloadAction<any[]>) => {
            state.allBrands = action.payload;
        },
        setAllVendorsData: (state, action: PayloadAction<any[]>) => {
            state.allVendors = action.payload;
        },
        setAllCategoriesData: (state, action: PayloadAction<any[]>) => {
            state.allCategories = action.payload;
        },
        setFilterData: (state, action: PayloadAction<InventoryState['filterData']>) => {
            state.filterData = action.payload;
        },
        setPartsList: (state, action: PayloadAction<Dealer[]>) => {
            state.allParts = action.payload;
        },
        setDrawerOpen: (state) => {
            state.drawerOpen = true;
        },
        setDrawerClose: (state) => {
            state.drawerOpen = false;
        },
        setSelectedDealer: (state, action) => {
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
    setPartsList,
    setDrawerOpen,
    setDrawerClose,
    setSelectedDealer,
    setLoading,
    setAllBrandsData,
    setAllVendorsData,
    setAllCategoriesData
} = InventorySlice.actions;

export default InventorySlice.reducer;