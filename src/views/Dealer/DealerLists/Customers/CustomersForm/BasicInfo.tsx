import AdaptableCard from '@/components/shared/AdaptableCard'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import {
    Field,
    FieldArray,
    FormikErrors,
    FormikTouched,
    FormikProps,
    Formik,
} from 'formik'
import { useState } from 'react'
import { HiDocumentText, HiMail, HiX } from 'react-icons/hi'
import * as Yup from 'yup'
// import AdditionInfo from './AdditionalInfo'

type FormFieldsName = {
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

type BasicInfo = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInfo = ({ touched, errors }: BasicInfo) => {
    const [selectedContact, setSelectedContact] = useState<string | null>(null)
    const [formValues, setFormValues] = useState<FormFieldsName>({
        firstName: '',
        lastName: '',
        phoneNumber: [{ type: 'mobile', number: 9834789347 }],
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
    })

    const handleAddPhone = () => {
        setFormValues(prevValues => ({
            ...prevValues,
            phoneNumber: [...prevValues.phoneNumber, { type: '', number: 9834789347 }]
        }))
    }

    const handleRemovePhone = (index: number) => {
        setFormValues(prevValues => ({
            ...prevValues,
            phoneNumber: prevValues.phoneNumber.filter((_, i) => i !== index)
        }))
    }

    const handleAddEmail = () => {
        setFormValues(prevValues => ({
            ...prevValues,
            email: [...prevValues.email, '']
        }))
    }

    const handleRemoveEmail = (index: number) => {
        setFormValues(prevValues => ({
            ...prevValues,
            email: prevValues.email.filter((_, i) => i !== index)
        }))
    }

    return (
        <AdaptableCard divider className="mb-4 p-2">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
                <FormItem
                    label="First Name"
                    invalid={(errors.firstName && touched.firstName) as boolean}
                    errorMessage={errors.firstName}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name="firstName"
                        placeholder="First Name"
                        component={Input}
                        className="border border-gray-300 outline-none p-1 rounded-md focus:ring-0 focus:ring-blue-300 bg-slate-50"
                        required
                    />
                </FormItem>

                <FormItem
                    label="Last Name"
                    invalid={(errors.lastName && touched.lastName) as boolean}
                    errorMessage={errors.lastName}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name="lastName"
                        placeholder="Last Name"
                        component={Input}
                        className="border border-gray-300 outline-none p-1 rounded-md focus:ring-0 focus:ring-blue-300 bg-slate-50 "
                        required
                    />
                </FormItem>
            </div>

            {/* Phone Numbers Section */}
            <div className="mb-4">
                <label className="block mb-2 focus:ring-0 focus:ring-blue-300 bg-slate-50">
                    Phone Numbers
                </label>

                {formValues.phoneNumber.map((phone, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2">
                        <div className="flex-1 grid grid-cols-4 gap-2">
                            <FormItem className="col-span-1">
                                <Field
                                    as="select"
                                    name={`phoneNumber.${index}.type`}
                                    className="border border-gray-300 outline-none p-1 rounded-md focus:ring-0 focus:ring-blue-300 bg-slate-50 w-full h-11"
                                >
                                    <option value="mobile">Mobile</option>
                                    <option value="work">Work</option>
                                    <option value="home">Home</option>
                                    <option value="office">Office</option>
                                    <option value="other">Other</option>
                                </Field>
                            </FormItem>

                            <FormItem className="col-span-3">
                                <Field
                                    type="text"
                                    name={`phoneNumber.${index}.number`}
                                    placeholder="Phone Number"
                                    component={Input}
                                    className="border border-gray-300 outline-none p-1 rounded-md focus:ring-0 focus:ring-blue-300 bg-slate-50"
                                />
                            </FormItem>
                        </div>

                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemovePhone(index)}
                                className="p-2 text-black-500 hover:text-blue-700 hover:bg-gray-100 mt-1"
                            >
                                <HiX className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                ))}

                {formValues.phoneNumber.length < 3 && (
                    <button
                        type="button"
                        onClick={handleAddPhone}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1 -mt-7"
                    >
                        Add Phone Number
                    </button>
                )}
            </div>

            {/* Email Section */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">
                    Email Addresses
                </label>

                {formValues.email.map((email, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                        <FormItem
                            className="flex-1"
                            invalid={touched.email && Boolean(errors.email?.[index])}
                            errorMessage={errors.email?.[index]}
                        >
                            <Field
                                type="email"
                                name={`email.${index}`}
                                placeholder="Enter email address"
                                component={Input}
                                className="border border-gray-300 outline-none p-1 rounded-md focus:ring-0 focus:ring-blue-300 bg-slate-50"
                            />
                        </FormItem>

                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveEmail(index)}
                                className="text-black-500 hover:text-blue-700 hover:bg-gray-100 p-2 -mt-7"
                            >
                                <HiX className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                ))}

                {formValues.email.length < 3 && (
                    <button
                        type="button"
                        onClick={handleAddEmail}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1 -mt-7"
                    >
                        Add Email
                    </button>
                )}
            </div>

            {/* Preferred Contact Method */}
            <FormItem label="Preferred Contact Method">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <button
                        type="button"
                        className={`flex items-center justify-center border border-gray-300 p-2 rounded-md w-full 
                                ${selectedContact === 'sms' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'} 
                                hover:bg-blue-100 focus:ring-0 border-blue-500 hover:text-blue-600`}
                        onClick={() => setSelectedContact('sms')}
                    >
                        <HiDocumentText className="mr-2" />
                        <span>SMS</span>
                    </button>

                    <button
                        type="button"
                        className={`flex items-center justify-center border border-gray-300 p-2 rounded-md w-full 
                                ${selectedContact === 'email' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'} 
                                hover:bg-blue-100 focus:ring-0 border-blue-500 hover:text-blue-600`}
                        onClick={() => setSelectedContact('email')}
                    >
                        <HiMail className="mr-2" />
                        <span>Email</span>
                    </button>

                    <button
                        type="button"
                        className={`flex items-center justify-center border border-gray-300 p-2 rounded-md w-full 
                                ${selectedContact === 'call' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'} 
                                hover:bg-blue-100 focus:ring-0 border-blue-500 hover:text-blue-600`}
                        onClick={() => setSelectedContact('call')}
                    >
                        <span>Both</span>
                    </button>
                </div>
            </FormItem>

        </AdaptableCard>
    )
}

export default BasicInfo