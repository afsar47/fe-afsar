import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import WorkflowTableSearch from './WorkflowTableSearch'
import WorkflowFilter from './WorkflowFilter'
import { useState } from 'react'

const WorkflowTableTools = () => {


    const [loading, setLoading] = useState(false)

    const onClick = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <WorkflowTableSearch />
            <WorkflowFilter />
            <Link
                download
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/product-list.csv"
                target="_blank"
            >
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            <Link onClick={onClick}
                className="block lg:inline-block md:mb-0 mb-4"
                to="/app/sales/product-new"
            >
                <Button
                    className="mr-2"
                    variant="solid"
                    loading={loading} size="sm" icon={<HiPlusCircle />}>
                    New Estimate
                </Button>
            </Link>
        </div>
    )
}

export default WorkflowTableTools
