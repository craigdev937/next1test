import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h2>Dashboard</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos ad repellat! Fuga aspernatur facere quo voluptatem expedita quibusdam repellendus nam reprehenderit ipsa nesciunt? Et in officia nam sunt consequatur?</p>
            <section className="flex justify-center my-8">
                <Link href={"/tickets"}>
                    <button className="btn-primary">View Tickets</button>
                </Link>
            </section>
            <h2>Company Updates</h2>
            <section className="card">
                <h3>New member of the web dev team...</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur minus maxime totam repellendus tempore? A est commodi quisquam, nesciunt enim blanditiis! Dolores odio ab sunt aliquid quaerat doloribus ad.</p>
            </section>
            <section className="card">
                <h3>New website live!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur minus maxime totam repellendus tempore? A est commodi quisquam, nesciunt enim blanditiis! Dolores odio ab sunt aliquid quaerat doloribus ad.</p>
            </section>
        </main>
    );
};


