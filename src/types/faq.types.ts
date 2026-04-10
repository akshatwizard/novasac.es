export type FAQResponse = {
    status: boolean;
    message: boolean;
    data: FAQData[];
}

export type FAQData = {
    id: number;
    question: string;
    answer: string;
}