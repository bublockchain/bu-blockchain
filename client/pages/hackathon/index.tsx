import React from "react";

import s from './hackathon.module.scss';
import Image from "next/image";
import Link from "next/link";

import { Inter, Roboto, Oxygen_Mono } from 'next/font/google'
const oxygen_mono = Oxygen_Mono({
	subsets: ['latin'],
	weight: '400'
})

export default function Hackathon() {

	return (

		<div className={`${oxygen_mono.className} ${s.main}`}>
			<h1>BeanTown Showdown</h1>
			<h2>Hackathon and Pitchathon</h2>
			<div className={s.info}>
				<div className={s.item}>
					<h3>Date</h3>
					<p>November 23-24, 2024</p>
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
					<p>8 St Mary's St, Boston, MA 02215</p>
				</div>
			</div>
		</div>
	);
}