import React from 'react';
import AdaptableCard from '@/components/shared/AdaptableCard'; // Reusing this component
import TiresStatistics from './TiresStatistics';
import TiresTableTools from './TiresTableTools';
import TiresTable from './TireTable';


const Parts = () => {
    return (
        <>
            <TiresStatistics />
            <AdaptableCard className="h-full" bodyClass="h-full">
                <TiresTableTools />
                <TiresTable />
            </AdaptableCard>
        </>
        
    );
};

export default Parts;
