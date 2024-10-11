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
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		if (typeof window !== 'undefined' && window.location.hash === '#interest') {
			const interestSection = document.querySelector(`.${s.interest}`);
			interestSection?.scrollIntoView({ behavior: 'smooth' });
		}
	}, []);

	return (
		<div className={`${oxygen_mono.className} ${s.main}`}>
			<h1>BeanTown Showdown</h1>
			<h2>Hackathon and Business Case Competition</h2>
			<div className={s.info}>
				<div className={s.item}>
					<h3>Date</h3>
					<p>November 23, 2024<br></br> November 24, 2024</p>
				</div>
				<div className={s.item}>
					<h3>Prizes</h3>
					<p><i>To be revealed soon</i></p>
					<div className={s.spacer1}></div>
					<p>1st Place: $xxxx</p>
					<p>2nd Place: $xxxx</p>
					<p>3rd Place: $xxxx</p>
				</div>
				<div className={s.item}>
					<h3>Location</h3>
					<p>Boston University</p>
					<p>Photonics Center</p>
					<div className={s.spacer1}></div>
					<p>8 St Mary's St,</p>
					<p> Boston, MA 02215</p>
				</div>
			</div>
			{isClient && (
				<div className={s.interest} id="interest">
					<h3>Interest Form</h3>
					<a href="https://www.eventbrite.com/e/1st-annual-boston-beantown-showdown-tickets-1034147742737" target="_blank" rel="noopener noreferrer">
						<button className={s.applyButton}>
							Apply
						</button>
					</a>
				</div>
			)}
		</div>
	);
}
