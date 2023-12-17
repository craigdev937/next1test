import React from "react";
import { notFound } from "next/navigation";
import { ITic } from "../../../models/Interfaces";
const URL = "http://localhost:5000/tickets";

export const dynamicParams = true;

export async function generateStaticParams(): Promise<ITic[]> {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const tickets = await res.json();
    return tickets.map((ticket: ITic) => ({
        id: ticket.id
    }));
};

async function getTicket(id: string): Promise<ITic> {
    // imitate a delay.
    await new Promise((res) => setTimeout(res, 4000));
    // run normal fetching.
    const res: Response = await fetch(`${URL}/${id}`, {
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) notFound();
    const data = await res.json();
    return data;
};

type PID = {
    params: {
        id: string 
    }
};

export default async function TicketDetails({ params }: PID) {
    const ticket = await getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
};


