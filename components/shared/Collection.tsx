import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'

type CollectionProps = {
    data: IEvent[],         

    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
  }


const Collection = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages = 0,
    collectionType,
    urlParamName,
}:CollectionProps) => {
  return (
    <>
    {/* {data.length > 0 ? (
            
            
                console.log(data[0].title)
            
        ): (
            console.log("error")
        )} */}


        {data.length > 0 ? (
            // const evdata = data[0]
            <div>
                
                {data[0].title}
            </div>
        ): (
            <div>
                <h3>{emptyTitle}</h3>
                <p>{emptyStateSubtext}</p>
            </div>
        )}
    </>
  )
}

export default Collection
