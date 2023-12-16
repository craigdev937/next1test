import React from "react";
import Link from "next/link";
import { ITic } from "../../models/Interfaces";
const URL = "http://localhost:5000/tickets";

async function getTickets(): Promise <ITic[]> {
    const res: Response = await fetch(URL, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return [...data];
};

export default async function TicketList() {
    const tickets = await getTickets();

    return (
        <React.Fragment>
            {tickets.map((ticket) => (
                <aside 
                    key={ticket.id} 
                    className="card my-5"
                >
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div 
                            className={`pill ${ticket.priority}`}
                        >
                            {ticket.priority} priority
                        </div>
                    </Link>
                </aside>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
            )}
        </React.Fragment>
    );
};


