'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordions = (props:any) => {
    
    const styles = {
        backgroundColor: '#ebecf5',
        
      };

  return (
    <div className='min-h-full'>
      <Accordion type='single' collapsible className="w-full">
        <AccordionItem value='item 1'>
        <AccordionTrigger className="border pl-3 shadow"style={styles}>Is it accessible?</AccordionTrigger>
        <AccordionContent className='w-full bg-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur repellendus ut fugiat asperiores assumenda veniam earum reprehenderit a saepe.
        </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type='single' collapsible className="w-full">
        <AccordionItem value='item 2'>
        <AccordionTrigger className="border pl-3 shadow"style={styles}>Is it accessible?</AccordionTrigger>
        <AccordionContent className='w-full bg-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur repellendus ut fugiat asperiores assumenda veniam earum reprehenderit a saepe.
        </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type='single' collapsible className="w-full">
        <AccordionItem value='item 3'>
        <AccordionTrigger className="border pl-3 shadow"style={styles}>Is it accessible?</AccordionTrigger>
        <AccordionContent className='w-full bg-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur repellendus ut fugiat asperiores assumenda veniam earum reprehenderit a saepe.
        </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type='single' collapsible className="w-full">
        <AccordionItem value='item 3'>
        <AccordionTrigger className="border pl-3 shadow"style={styles}>Is it accessible?</AccordionTrigger>
        <AccordionContent className='w-full bg-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aspernatur repellendus ut fugiat asperiores assumenda veniam earum reprehenderit a saepe.
        </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accordions
