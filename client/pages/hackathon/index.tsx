import React, { useState, useEffect } from "react";
import s from './hackathon.module.scss';
import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto, Oxygen_Mono } from 'next/font/google'

const oxygen_mono = Oxygen_Mono({
	subsets: ['latin'],
	weight: '400'
})

export default function Hackathon() {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	async function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('Submitting...');
		try {
			const response = await fetch('/api/interest', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});
			if (response.ok) {
				setStatus('Thank you for your interest!');
				setEmail(''); // Clear the email input
			} else {
				const data = await response.json();
				setStatus(`Error: ${data.error || 'Something went wrong'}`);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setStatus('Error: Unable to submit form');
		}
	}

	return (
		<div className={`${oxygen_mono.className} ${s.main}`}>
			<h1>BeanTown Showdown</h1>
			<h2>Hackathon and Pitchathon</h2>
			<div className={s.info}>
				<div className={s.item}>
					<h3>Date</h3>
					<p>November 23, 2024 <br></br> November 24, 2024</p>
				</div>
				<div className={s.item}>
					<h3>Prizes</h3>
					<p><i>To be revealed soon</i></p>
					<p>1st Place: $xxxx</p>
					<p>2nd Place: $xxxx</p>
					<p>3rd Place: $xxxx</p>
				</div>
				<div className={s.item}>
					<h3>Location</h3>
					<p>Boston University</p>
					<p>Photonics Center</p>
					<p>8 St Mary's St, <br></br> Boston, MA 02215</p>
				</div>
			</div>
			{isClient && (
				<form className={s.interest} onSubmit={submit}>
					<h3>Interest Form</h3>
					<div className={s.form}>
						<input
							placeholder="email address"
							required
							type="email"
							id='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<button type="submit">submit</button>	
					</div>
					{status && <p className={s.status}>{status}</p>}
				</form>
			)}
		</div>
	);
}