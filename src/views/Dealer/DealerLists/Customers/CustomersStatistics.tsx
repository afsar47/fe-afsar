import { apiNewCustomer } from '../Services/DealerListServices'
import { HiPlusCircle, HiX } from 'react-icons/hi'
import { Button, FormItem } from '@/components/ui'
import { useState } from 'react'
import BasicInfo from './CustomersForm/BasicInfo'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import AdditionInfo from './CustomersForm/AdditionalInfo'
import AddressInfo from './CustomersForm/AddressInfo'
import FeesInfo from './CustomersForm/FeesInfo'

export type FormFieldsName = {
    // Basic Info
    firstName: string
    lastName: string
    phoneNumber: Array<{
        type: string
        number: number
    }>,
    email: string[]
    preferredContactMethod: 'sms' | 'email' | 'both' | null
    tags?: string
    note?: string
    referralSource?: string
    company?: string
    fleet?: string
    paymentTerms?: string
    address1?: string
    address2?: string
    city?: string
    state?: string
    zipCode?: string
}

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phoneNumber: Yup.array()
        .of(
            Yup.object().shape({
                type: Yup.string().required('Phone type is required'),
                number: Yup.string().required('Phone number is required'),
            }),
        )
        .min(1, 'At least one phone number is required'),
    email: Yup.array()
        .of(Yup.string().email('Invalid email').required('Email is required'))
        .min(1, 'At least one email is required'),
    preferredContactMethod: Yup.string()
        .oneOf(['sms', 'email', 'both'])
        .nullable(),
    tags: Yup.string(),
    note: Yup.string(),
    referralSource: Yup.string(),
    company: Yup.string(),
    fleet: Yup.string(),
    paymentTerms: Yup.string(),
    address1: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string(),
})

const CustomersStatistics = () => {
    const [showForm, setShowForm] = useState(false)
    const [showFees, setShowFees] = useState(false)

    // Toggle form on button click
    const handleButtonClick = () => {
        setShowForm(!showForm) // Toggle form visibility
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: [{ type: 'mobile', number: '' }],
        email: [''],
        preferredContactMethod: null,
        tags: '',
        note: '',
        referralSource: '',
        company: '',
        fleet: '',
        paymentTerms: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
    }

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Customers</h2>
                <Button
                    variant="solid"
                    type="button"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-1 px-3 py-1.5"
                    onClick={handleButtonClick}
                >
                    <HiPlusCircle className="h-4 w-4" />
                    New Customer
                </Button>

                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white w-[550px] h-[570px] rounded-lg shadow-lg relative border border-gray-200">
                            <div className="flex justify-between items-center p-3 border-b">
                                <h3 className="text-lg font-semibold">
                                    New Customer
                                </h3>
                                <button
                                    className="text-gray-500 hover:text-gray-700 font-bold"
                                    onClick={handleButtonClick}
                                >
                                    ✕
                                </button>
                            </div>
                            <div
                                className="overflow-y-auto p-4"
                                style={{ height: 'calc(100% - 110px)' }}
                            >
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, { resetForm }) => {
                                        console.log('Submit triggered', values)
                                        try {
                                            const response = await apiNewCustomer(values)
                                            console.log('api response', response)
                                            toast.push(
                                                <Notification
                                                    title="Success"
                                                    type="success"
                                                >
                                                    New Customer Saved
                                                    Successfully
                                                </Notification>,
                                            )
                                            resetForm()
                                            setShowForm(false)
                                        } catch (error) {
                                            console.error(
                                                'Error saving form:',
                                                error,
                                            )
                                            toast.push(
                                                <Notification
                                                    title="Error"
                                                    type="danger"
                                                >
                                                    Error saving customer
                                                </Notification>,
                                            )
                                        }
                                    }}
                                >
                                    {({ touched, errors, handleSubmit }) => (
                                        <Form onSubmit={handleSubmit}>
                                            {/* Render BasicInfo with relevant fields */}
                                            <BasicInfo
                                                touched={touched}
                                                errors={errors}
                                            />
                                            <AdditionInfo />
                                            <AddressInfo />
                                            <div className="mb-4">
                                                <button
                                                    type="button"
                                                    className="w-full flex justify-between items-center bg-gray-200 p-2 rounded-md border border-gray-300 hover:bg-gray-300"
                                                    onClick={() =>
                                                        setShowFees(!showFees)
                                                    }
                                                >
                                                    <span>Fees</span>
                                                    <span>
                                                        {showFees ? (
                                                            <HiX />
                                                        ) : (
                                                            '+'
                                                        )}
                                                    </span>
                                                </button>
                                                {showFees && (
                                                    <FormItem>
                                                        <FeesInfo />
                                                    </FormItem>
                                                )}
                                            </div>

                                            {/* Move the Save button here */}
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
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomersStatistics
