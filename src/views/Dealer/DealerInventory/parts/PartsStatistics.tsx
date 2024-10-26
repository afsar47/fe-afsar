import {
    HiOutlineCube,
    HiOutlineCurrencyDollar,
    HiOutlineTag,
    HiPlusCircle,
} from 'react-icons/hi'
import { NumericFormat } from 'react-number-format'
import { Avatar, Card } from '@/components/ui'
import { Button } from '@/components/ui'
import { useCallback, useEffect, useState } from 'react'
import BasicInfo from '../PartsForm/BasicInfo'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PartsImage from '../PartsForm/PartsImage'
import { cloneDeep } from 'lodash'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { apiNewPart } from '../../DealerLists/Services/DealerInventoryServices'
import { getParts, useAppDispatch, useAppSelector } from '../store'
import AddNewBrandModal from '../../DealerSharedComponent/AddNewBrandModal'
import DealersStatistics from '../../DealerLists/Dealers/VendorsStatistics'
import NewDealerModal from '../../DealerSharedComponent/NewVendorModal'
import AddNewCategoryModal from '../../DealerSharedComponent/AddNewCategoryModal'

type StatisticCardProps = {
    icon: React.ReactNode
    avatarClass: string
    label: string
    value?: number
}

const validationSchema = Yup.object().shape({
    partName: Yup.string().required('Part Name is required').max(70, 'Part Name must be less than 70 characters'),
    brand: Yup.string().required('Brand Name is required'),
    partSerialNo: Yup.number().required('Part# is required').max(20, 'Vendor Name must be less than 20 characters'),
    partSku: Yup.string(),
    note: Yup.string(),
    vendor: Yup.string(),
    url: Yup.string().url('Invalid URL format'),
})

const StatisticCard = (props: StatisticCardProps) => {
    const { icon, avatarClass, label, value } = props

    return (
        <Card bordered className="w-52 p-1 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar className={avatarClass} icon={icon} />
                <div>
                    <span className="text-sm">{label}</span>
                    <h3 className="text-lg font-semibold">
                        <NumericFormat
                            thousandSeparator
                            displayType="text"
                            value={value}
                        />
                    </h3>
                </div>
            </div>
        </Card>
    )
}

const PartsStatistics = () => {
    const [showForm, setShowForm] = useState(false)

    // Toggle form on button click
    const handleButtonClick = () => {
        setShowForm(!showForm) // Toggle form visibility
    }

    const initialValues = {
        partName: '',
        note: '',
        partSerialNo: 0,
        partSku: '',
        url: '',
        quantity: 0,
        minQuantity: 0,
        maxQuantity: 0,
        vendor: '',
        bin: '',
        cost: 0,
        retail: 0,
        category: '',
        brand: '',
    }
    const dispatch = useAppDispatch()
    const filterData = useAppSelector((state) => state.inventory.filterData);
    const { pageIndex, pageSize, sort, query, total } = useAppSelector(
        (state) => state.dealer.tableData
    );
    const [AddBrandModelOpen, setAddBrandModelOpen] = useState(false)
    const [AddVendorModelOpen, setAddVendorModelOpen] = useState(false)
    const [AddCategoryModelOpen, setAddCategoryModelOpen] = useState(false)

    const [allPartDetail, setallPartDetail] = useState({
        total: 0,
        totalCost: 0,
        totalValue: 0
    })

    const fetchData = useCallback(() => {
        dispatch(getParts({ pageIndex, pageSize, sort, query, filterData }))
    }, [pageIndex, pageSize, sort, query, filterData, dispatch])

    const data = useAppSelector((state) => state.inventory.allParts);
    const { totalCost, totalValue } = data.reduce(
        (acc: any, part: any) => ({
            totalCost: acc.totalCost + (part.cost || 0),
            totalValue: acc.totalValue + (part.retail || 0)
        }),
        { totalCost: 0, totalValue: 0 }
    );
    useEffect(() => {
        setallPartDetail({
            total: data.length,
            totalCost: totalCost,
            totalValue: totalValue
        })
    }, [])

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Parts</h2>
                <Button
                    variant="solid"
                    type="button"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-1 px-3 py-1.5"
                    onClick={handleButtonClick}
                >
                    <HiPlusCircle className="h-4 w-4" />
                    New Parts
                </Button>

                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-[650px] h-[600px] rounded-lg shadow-lg relative border border-gray-200">
                            <div className="flex justify-between items-center p-3 border-b">
                                <h3 className="text-base font-semibold">New Part</h3>
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={handleButtonClick}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="overflow-y-auto p-4" style={{ height: 'calc(100% - 110px)' }}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, { resetForm }) => {
                                        const formData = cloneDeep(values)
                                        console.log('Form Values:', formData)
                                        try {
                                            const response = await apiNewPart(values)
                                            fetchData();
                                            const data = useAppSelector((state) => state.inventory.allParts);
                                            const { totalCost, totalValue } = data.reduce(
                                                (acc: any, part: any) => ({
                                                    totalCost: acc.totalCost + (part.cost || 0),
                                                    totalValue: acc.totalValue + (part.retail || 0)
                                                }),
                                                { totalCost: 0, totalValue: 0 }
                                            );
                                            setallPartDetail({
                                                total: data.length,
                                                totalCost: totalCost,
                                                totalValue: totalValue
                                            })
                                            toast.push(
                                                <Notification title="Success" type="success">
                                                    New Part Saved Successfully
                                                </Notification>,

                                            )
                                            resetForm()
                                            setShowForm(false)
                                        } catch (error: any) {
                                            console.error(
                                                'Error saving form:',
                                                error.message,
                                            )
                                            toast.push(
                                                <Notification title="Error" type="danger">
                                                    {error.message ? error.message : "Server Error"}
                                                </Notification>,

                                            )
                                        }
                                    }}
                                >
                                    {({ touched, errors, handleSubmit, setFieldValue }) =>
                                    (
                                        <Form onSubmit={handleSubmit}>
                                            {/* Pass the touched and errors to BasicInfo */}
                                            <BasicInfo
                                                touched={touched}
                                                errors={errors}
                                                setFieldValue={setFieldValue}
                                                setAddBrandModelOpen={setAddBrandModelOpen}
                                                setAddVendorModelOpen={setAddVendorModelOpen}
                                                setAddCategoryModelOpen={setAddCategoryModelOpen}
                                            />
                                            <PartsImage />

                                            <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2 border-t bg-white">
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="bg-gray-300 mr-2 px-4 py-1.5"
                                                    onClick={handleButtonClick}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="solid"
                                                    type="submit"
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5"

                                                >
                                                    Save
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                {AddBrandModelOpen && (
                                    <AddNewBrandModal
                                        isOpen={AddBrandModelOpen}
                                        onClose={() => setAddBrandModelOpen(false)}
                                    />
                                )}
                                {AddVendorModelOpen && (
                                    <NewDealerModal
                                        isOpen={AddVendorModelOpen}
                                        onClose={() => setAddVendorModelOpen(false)}
                                    />
                                )}
                                {AddCategoryModelOpen && (
                                    <AddNewCategoryModal
                                        isOpen={AddCategoryModelOpen}
                                        onClose={() => setAddCategoryModelOpen(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-2xl">
                <StatisticCard
                    icon={<HiOutlineCube />}
                    avatarClass="!bg-indigo-500"
                    label="Total Quantity"
                    value={allPartDetail.total}
                />
                <StatisticCard
                    icon={<HiOutlineCurrencyDollar />}
                    avatarClass="!bg-blue-400"
                    label="Total Cost"
                    value={allPartDetail.totalCost}
                />
                <StatisticCard
                    icon={<HiOutlineTag />}
                    avatarClass="!bg-emerald-400"
                    label="Total Value"
                    value={allPartDetail.totalValue}
                />
            </div>
        </div>

    )
}

export default PartsStatistics
