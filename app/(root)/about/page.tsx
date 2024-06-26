import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const page = () => {
  return (
    <>
    <section className="flex flex-col justify-center bg-primary-50 bg-dotted-pattern bg-contain pr-0">
    
            <div className="flex w-full flex-col items-center gap-8 p-5 md:p-10 ">
                <h2 className='h2-bold'>About Us </h2>
            </div>
            <div >
                <Card>
                    <CardHeader>
                        <CardTitle>About EventWorld</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>EventWorld focuses on providing an easy and reliable platform for users to book tickets to events of any type through online mode. The registered users of the system can sell as well as book tickets to concerts, sports events, theatre shows, and other events from anywhere at any time.</p>
                    </CardContent>
                    <CardFooter className='flex items-center'>
                        <Image src="/assets/images/logo1.png"
                            alt="hero image"
                            width={638}
                            height={138}
                            className="h-full min-h-[10px] object-cover object-center md:max-h-[300px]"
                        />
                        <Card className='max-w-[150px] sticky right-4'>
                            <Image src="/assets/images/profile1.jpg"
                                alt="hero image"
                                width={28}
                                height={28}
                                className="h-full w-full max-h-[150px] max-w-[150px] object-cover object-center py-1"
                            />
                            <CardDescription className=''>
                                Developed and Managed by Ninad Shingare
                            </CardDescription>
                        </Card>
                                         
                    </CardFooter>
                </Card>
            </div>
            

            {/* <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3>
                                <b>About EventWorld</b>
                            </h3>

                            <div className="row">
                                <div className="col-md-7">
                                
                                    <p>
                                        EventWorld is an microservice which manages mobile plans 
                                        with ease. In this application we can create, read, update 
                                        and delete mobile plans. The activites performed in this 
                                        application will be recorded in <b>Logs</b> section.
                                    </p>
                                </div>

                                <div className="col-md-5">
                                    <Image src="/assets/icons/calendar.svg"
                                        alt="hero image"
                                        width={175}
                                        height={175}
                                        className="h-full min-h-[300px] object-cover object-center"
                                         />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div> */}
    </section>
    </>
  )
}

export default page
