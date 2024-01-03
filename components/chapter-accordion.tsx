"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Preview } from "@/components/preview";

interface ChapterAccordionProps {
    chapterID: string;
    chapterTitle: string;
    chapterDescription: string;
}

const ChapterAccordion = (
    { chapterID, chapterTitle, chapterDescription }: ChapterAccordionProps
) => {
    return (
        <div className="py-2">
            <Accordion variant="splitted">
                <AccordionItem key={chapterID} aria-label={chapterTitle} title={chapterTitle}>
                    <Preview value={chapterDescription}></Preview>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default ChapterAccordion;