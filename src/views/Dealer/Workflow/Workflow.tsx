import { SetStateAction, useState } from 'react';
import { RootState, injectReducer } from '@/store';
import AdaptableCard from '@/components/shared/AdaptableCard';
import WorkflowTable from './WorkflowTable';
import WorkflowTableTools from './WorkflowTableTools';
import Segment from '@/components/ui/Segment';
import { HiOutlineChatAlt2, HiOutlineCalendar, HiOutlineClipboardCheck, HiOutlineLockClosed, HiOutlinePlus, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useAppSelector } from '@/store';
import PartsTable from '../DealerInventory/parts/PartsTable';
import TiresTable from '../DealerInventory/Tires/TireTable';

// Define the Estimate interface here
interface Estimate {
    orderName: string;
    inspectionStatus: string;
    customer: string;
    workflow: string; // Include other fields as neede
}

interface EstimateCardProps {
    orderTitle: string;
    vehicleInfo: string;
    customerName: string;
    onMenuAction: (action: string) => void; // Function to handle menu actions
}

const ProductList = () => {
    const estimates = useAppSelector((state: RootState) => state.workflow.estimateList);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSegmentChange = (value: string) => {
        setSelectedValue(value);
    };
    const [activeHeading, setActiveHeading] = useState('parts'); // State to track active heading

    const handleHeadingChange = (heading: SetStateAction<string>) => {
        setActiveHeading(heading); // Update active heading
    };
    // Grouping estimates by workflow status
    const groupedEstimates: Record<string, Estimate[]> = {
        estimates: [],
        droppedOff: [],
        inProgress: [],
        invoices: [],
    };

    estimates.forEach((estimate) => {
        switch (estimate.workflow) {
            case 'Estimates':
                groupedEstimates.estimates.push(estimate);
                break;
            case 'Dropped Off':
                groupedEstimates.droppedOff.push(estimate);
                break;
            case 'In Progress':
                groupedEstimates.inProgress.push(estimate);
                break;
            case 'Invoices':
                groupedEstimates.invoices.push(estimate);
                break;
            default:
                break;
        }
    });

    const EstimateCard: React.FC<EstimateCardProps> = ({ orderTitle, vehicleInfo, customerName, onMenuAction }) => {
        const [menuOpen, setMenuOpen] = useState(false); // Independent state for each card's menu

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };

        const handleMenuClick = (action: string) => {
            onMenuAction(action);
            setMenuOpen(false); // Close the menu after an action
        };

        return (
            <div className="bg-white shadow-lg rounded-lg p-3 mb-4 w-full"> {/* Set width to 100% */}
                {/* Three Dot Menu */}
                <div className="absolute right-2 top-2">
                    <button onClick={toggleMenu} className="text-gray-600">
                        <HiOutlineDotsHorizontal className="w-5 h-5" />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-lg">
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleMenuClick('Duplicate')}
                            >
                                Duplicate
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleMenuClick('Archive')}
                            >
                                Archive
                            </button>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => handleMenuClick('Delete')}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                {/* Order Title */}
                <h5 className="text-base font-medium mb-2">{orderTitle}</h5>

                {/* Add Tags Button with + icon */}
                <button className="flex items-center text-blue-500 px-3 py-1 mb-4">
                    <HiOutlinePlus className="w-5 h-5 mr-2" /> Add Tags
                </button>

                {/* Vehicle Info */}
                <p className="text-gray-700 mb-2">{vehicleInfo}</p>

                {/* Customer Name */}
                <p className="text-gray-700 mb-4">Customer: {customerName}</p>

                {/* Silver Line */}
                <div className="border-t border-gray-300 my-4"></div>

                {/* Icons for Message, Appointment, Inspection */}
                <div className="flex items-center justify-between">
                    {/* Left-side Icons */}
                    <div className="flex space-x-4">
                        <HiOutlineChatAlt2 className="text-gray-600 w-5 h-5 cursor-pointer" title="Message" />
                        <HiOutlineCalendar className="text-gray-600 w-5 h-5 cursor-pointer" title="Appointment" />
                        <HiOutlineClipboardCheck className="text-gray-600 w-5 h-5 cursor-pointer" title="Inspection" />
                    </div>
                    {/* Right-side Authorization Icon */}
                    <HiOutlineLockClosed className="text-gray-600 w-5 h-5 cursor-pointer" title="Authorization" />
                </div>
            </div>
        );
    };

    const handleMenuAction = (action: string) => {
        console.log(action); // Handle the action for Duplicate, Archive, Delete
    };

    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Workflow</h3>
                <WorkflowTableTools />
            </div>
            <Segment className="mb-4">
                <Segment.Item
                    value="columns"
                    onClick={() => handleSegmentChange("columns")}
                >
                    Columns
                </Segment.Item>
                <Segment.Item
                    value="lists-and-parts"
                    onClick={() => handleSegmentChange("lists-and-parts")}
                >
                    Lists
                </Segment.Item>
                <Segment.Item
                    value="time"
                    onClick={() => handleSegmentChange("time")}
                >
                    Parts & Tires
                </Segment.Item>
            </Segment>
            {/* Conditional rendering based on selected value */}
            {selectedValue === "columns" ? (
                <div className="grid grid-cols-4 gap-4 h-[calc(100vh-170px)] overflow-hidden"> {/* Prevent horizontal overflow */}
                    <div className="border p-4 bg-gray-100 h-full overflow-auto flex flex-col">
                        <h4 className="text-lg font-semibold mb-4">Estimates</h4>
                        {/* Dynamic Cards */}
                        <div className="flex flex-col items-center space-y-4 flex-grow">
                            {groupedEstimates.estimates.map((estimate, index) => (
                                <EstimateCard
                                    key={index}
                                    orderTitle={estimate.orderName}
                                    vehicleInfo={estimate.inspectionStatus}
                                    customerName={estimate.customer}
                                    onMenuAction={handleMenuAction}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 bg-gray-100 h-full overflow-auto flex flex-col">
                        <h4 className="text-lg font-semibold mb-4">In Progress</h4>
                        {/* Dynamic Cards for In Progress */}
                        <div className="flex flex-col items-center space-y-4 flex-grow">
                            {groupedEstimates.inProgress.map((estimate, index) => (
                                <EstimateCard
                                    key={index}
                                    orderTitle={estimate.orderName}
                                    vehicleInfo={estimate.inspectionStatus}
                                    customerName={estimate.customer}
                                    onMenuAction={handleMenuAction}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 bg-gray-100 h-full overflow-auto flex flex-col">
                        <h4 className="text-lg font-semibold mb-4">Dropped Off</h4>
                        {/* Dynamic Cards for Dropped Off */}
                        <div className="flex flex-col items-center space-y-4 flex-grow">
                            {groupedEstimates.droppedOff.map((estimate, index) => (
                                <EstimateCard
                                    key={index}
                                    orderTitle={estimate.orderName}
                                    vehicleInfo={estimate.inspectionStatus}
                                    customerName={estimate.customer}
                                    onMenuAction={handleMenuAction}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="border p-4 bg-gray-100 h-full overflow-auto flex flex-col">
                        <h4 className="text-lg font-semibold mb-4">Invoices</h4>
                        {/* Dynamic Cards for Invoices */}
                        <div className="flex flex-col items-center space-y-4 flex-grow">
                            {groupedEstimates.invoices.map((estimate, index) => (
                                <EstimateCard
                                    key={index}
                                    orderTitle={estimate.orderName}
                                    vehicleInfo={estimate.inspectionStatus}
                                    customerName={estimate.customer}
                                    onMenuAction={handleMenuAction}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : selectedValue === "time" ? (
                // Blank page for Parts & Tires
                <div className="h-[calc(100vh-170px)]">
                    <div className="flex space-x-2 mb-2"> {/* Reduced spacing */}
    <button 
        onClick={() => handleHeadingChange('parts')} 
        className={`px-4 py-2 rounded ${activeHeading === 'parts' ? 'text-blue-500' : 'text-black'}`}
    >
        Parts on Orders
    </button>
    <button 
        onClick={() => handleHeadingChange('tires')} 
        className={`px-4 py-2 rounded ${activeHeading === 'tires' ? 'text-blue-500' : 'text-black'}`}
    >
        Tires on Orders
    </button>
    <button 
        onClick={() => handleHeadingChange('returns')} 
        className={`px-4 py-2 rounded ${activeHeading === 'returns' ? 'text-blue-500' : 'text-black'}`}
    >
        Part Returns
    </button>
</div>

<hr className="border-t border-gray-300 mb-4" /> {/* Added line below headings */}

{/* Render content based on active heading */}
{activeHeading === 'parts' && (
    <div>
        {/* Content for Parts on Orders */}
         <div>
            <PartsTable />
        </div>
    </div>
)}
{activeHeading === 'tires' && (
    <div>
        {/* Content for Parts on Orders */}
         <div>
            <TiresTable />
        </div>
    </div>
)}



{activeHeading === 'returns' && (
    <div>
        {/* Content for Part Returns */}
        <h4 className="text-lg font-semibold">Displaying Part Returns</h4>
    </div>
)}                    {/* Blank page content, you can leave it empty */}
                </div>
            ) : (
                <WorkflowTable />
            )}
        </AdaptableCard>
    );
};

export default ProductList;
