import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation schema
import CalendarView from '@/components/shared/CalendarView';
import { HiOutlinePlus, HiPlusCircle } from 'react-icons/hi';
import CustomSelect from './CustomSelect';
import AddCustomerModal from './AddCustomerModal';
import TimeInput from '@/components/ui/TimeInput';
import SelectAndButton from '@/components/ui/SelectAndButton';
import { Button } from '@/components/ui';

const { TimeInputRange } = TimeInput;

const Example = () => {
    const [key, setKey] = useState(0);
    const [eventsData, setEventsData] = useState([
        { id: '0', title: 'All Day Event', start: getDate('YEAR-MONTH-01'), eventColor: 'orange' },
        { id: '1', title: 'Long Event', start: getDate('YEAR-MONTH-07'), end: getDate('YEAR-MONTH-10'), eventColor: 'red' },
        { id: '2', groupId: '999', title: 'Repeating Event', start: getDate('YEAR-MONTH-09T16:00:00+00:00'), eventColor: 'blue' },
        { id: '3', groupId: '999', title: 'Repeating Event', start: getDate('YEAR-MONTH-16T16:00:00+00:00'), eventColor: 'blue' },
        { id: '4', title: 'Birthday Party', start: getDate('YEAR-MONTH-19T07:00:00+00:00'), eventColor: 'purple' },
        { id: '5', title: 'Meeting', start: getDate('YEAR-MONTH-18T14:30:00+00:00'), eventColor: 'blue' },
        { id: '6', title: 'Dinner', start: getDate('YEAR-MONTH-18T20:00:00+00:00'), eventColor: 'emerald' },
    ]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTimeRange, setSelectedTimeRange] = useState<[Date, Date]>([new Date(), new Date(new Date().getTime() + 60 * 60000)]);
    const [isAddCustomerModalOpen, setAddCustomerModalOpen] = useState(false);

    const customersOptions = [
        { value: 'customer1', label: 'Customer 1' },
        { value: 'customer2', label: 'Customer 2' },
    ];

    const vehiclesOptions = [
        { value: 'vehicle1', label: 'Vehicle 1' },
        { value: 'vehicle2', label: 'Vehicle 2' },
    ];

    const ordersOptions = [
        { value: 'order1', label: 'Order 1' },
        { value: 'order2', label: 'Order 2' },
    ];

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        startDate: Yup.string().required('Date is required'),
        customer: Yup.string().required('Customer is required'),
        vehicle: Yup.string().required('Vehicle is required'),
        order: Yup.string().required('Order is required'),
        note: Yup.string().required('Note is required'),
    });

    function getDate(dayString: string) {
        const today = new Date();
        const year = today.getFullYear().toString();
        let month = (today.getMonth() + 1).toString();
        if (month.length === 1) {
            month = '0' + month;
        }
        return dayString.replace('YEAR', year).replace('MONTH', month);
    }

    const handleAddAppointment = (values: any) => {
        const startDateTime = `${values.startDate}T${selectedTimeRange[0].toTimeString().split(' ')[0]}`;
        const endDateTime = `${values.startDate}T${selectedTimeRange[1].toTimeString().split(' ')[0]}`;

        const newEventData = {
            id: (eventsData.length + 1).toString(),
            title: values.title,
            start: startDateTime,
            end: endDateTime,
            eventColor: 'blue',
        };

        setEventsData((prevEvents) => [...prevEvents, newEventData]);
        setModalOpen(false);
    };

    return (
        <div>
            <div style={{ flexDirection: "column" }} className="flex items-end space-x-2 mb-4">
                {/* <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
                    <HiPlusCircle /> Add New Appointment
                </button> */}
                <Button
                    variant="solid"
                    type="button"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center gap-1 px-3 py-1.5"
                    onClick={() => setModalOpen(true)}
                >
                    <HiPlusCircle className="h-4 w-4" />
                    Add New Appiontment
                </Button>
            </div>

            <CalendarView
                key={key}
                editable
                selectable
                events={eventsData}
                eventClick={(arg) => { }}
                select={(event) => { }}
                eventDrop={(arg) => { }}
            />

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md z-60 w-3/4 max-w-lg overflow-y-auto" style={{ maxHeight: '80vh' }}>
                        <h2 className="text-xl font-semibold mb-2">New Appointment</h2>
                        <div className="h-0.5 bg-gray-200 mb-4"></div>

                        <Formik
                            initialValues={{
                                title: '',
                                startDate: '',
                                customer: '',
                                vehicle: '',
                                order: '',
                                note: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleAddAppointment}
                        >
                            {({ setFieldValue }) => (
                                <Form>
                                    <div className="mb-4">
                                        <Field
                                            type="text"
                                            name="title"
                                            className="border border-gray-300 rounded w-full p-2 mb-2"
                                            placeholder="Title"
                                        />
                                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <Field
                                            type="date"
                                            name="startDate"
                                            className="border border-gray-300 rounded p-2 w-2/5"
                                        />
                                        <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
                                        <div className="ml-4 w-2/3">
                                            <TimeInputRange
                                                value={selectedTimeRange}
                                                setSelectedTimeRange={setSelectedTimeRange}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-0.5 bg-gray-200 my-4"></div>

                                    <SelectAndButton
                                        options={customersOptions}
                                        addNewButtonLabel="Add New Customer"
                                        onChange={(value) => setFieldValue('customer', value)}
                                        placeholder="Select or Add Customer"
                                        addNewClick={() => setAddCustomerModalOpen(true)}
                                        className="mb-4"
                                    />
                                    <ErrorMessage name="customer" component="div" className="text-red-500 text-sm mb-2" />

                                    <SelectAndButton
                                        options={vehiclesOptions}
                                        addNewButtonLabel="Add New Vehicle"
                                        onChange={(value) => setFieldValue('vehicle', value)}
                                        placeholder="Select or Add Vehicle"
                                        className="mb-4"
                                    />
                                    <ErrorMessage name="vehicle" component="div" className="text-red-500 text-sm mb-2" />

                                    <SelectAndButton
                                        options={ordersOptions}
                                        addNewButtonLabel="Add New Order"
                                        onChange={(value) => setFieldValue('order', value)}
                                        placeholder="Select or Add Order"
                                        className="mb-4"
                                    />
                                    <ErrorMessage name="order" component="div" className="text-red-500 text-sm mb-2" />

                                    <div className="mb-4">
                                        <Field
                                            as="textarea"
                                            name="note"
                                            className="border border-gray-300 rounded w-full p-2 mb-4"
                                            placeholder="Notes"
                                        />
                                        <ErrorMessage name="note" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                            Save
                                        </button>
                                        <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setModalOpen(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}

            {isAddCustomerModalOpen && (
                <AddCustomerModal
                    isOpen={isAddCustomerModalOpen}
                    onClose={() => setAddCustomerModalOpen(false)}
                    onCustomerAdded={(newCustomer: any) => setAddCustomerModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Example;
