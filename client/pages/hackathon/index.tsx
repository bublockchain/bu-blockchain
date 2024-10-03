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
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		university: '',
		major: '',
		graduationYear: '',
		userType: '', 
		github: '', // Technical questions
		previousProject: '', // User tells us about a previous project
		whyAttend: '', // Why they want to attend for both user types
	});
	const [isFormExpanded, setIsFormExpanded] = useState(false);

	useEffect(() => {
		setIsClient(true);
		// Add this to scroll to the interest section if the URL has #interest
		if (typeof window !== 'undefined' && window.location.hash === '#interest') {
			const interestSection = document.querySelector(`.${s.interest}`);
			interestSection?.scrollIntoView({ behavior: 'smooth' });
		}
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
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				setStatus('Thank you for your interest!');
				setFormData({
					email: '',
					name: '',
					university: '',
					major: '',
					graduationYear: '',
					userType: '', 
					github: '',
					previousProject: '', 
					whyAttend: '', 
				});
				setIsFormExpanded(false);
			} else {
				const data = await response.json();
				setStatus(`Error: ${data.error || 'Something went wrong'}`);
				setFormData({
					email: '',
					name: '',
					university: '',
					major: '',
					graduationYear: '',
					userType: '', 
					github: '', 
					previousProject: '', 
					whyAttend: '', 
				});
				setIsFormExpanded(false);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setStatus('Error: Unable to submit form');
		}
	}

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
					{!isFormExpanded ? (
						<Link href="/hackathon#interest" scroll={false}>
							<button onClick={() => setIsFormExpanded(true)} className={s.applyButton}>
								Apply
							</button>
						</Link>
					) : (
						<form className={s.form} onSubmit={submit}>
							<h1 className={s.formTitle}>Full Name</h1>
							<input
								required
								type="text"
								id='name'
								onChange={(e) => setFormData({...formData, name: e.target.value})}
								value={formData.name}
							/>
							<div className={s.formRow}>
								<div className={s.formGroup}>
									<h1 className={s.formTitle}>Email Address</h1>
									<input
										required
										type="email"
										id='email'
										onChange={(e) => setFormData({...formData, email: e.target.value})}
										value={formData.email}
									/>
								</div>
								<div className={s.formGroup}>
									<h1 className={s.formTitle}>University</h1>
									<input
										required
										type="text"
										id='university'
										onChange={(e) => setFormData({...formData, university: e.target.value})}
										value={formData.university}
									/>
								</div>
							</div>
							<div className={s.formRow}>
								<div className={s.formGroup}>
									<h1 className={s.formTitle}>Major</h1>
									<input
										required
										type="text"
										id='major'
										onChange={(e) => setFormData({...formData, major: e.target.value})}
										value={formData.major}
									/>
								</div>
								<div className={s.formGroup}>
									<h1 className={s.formTitle}>Graduation Year</h1>
									<input
										required
										type="text"
										id='graduationYear'
										onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
										value={formData.graduationYear}
									/>
								</div>
							</div>
							<div>
								<h1 className={s.formTitle}>What track are you applying for?</h1>
									<div className={s.checkboxGroup}>
										<input
											className={s.checkbox}
											type="checkbox"
											name="userType"
											value="technical"
											checked={formData.userType === 'technical'}
											onChange={(e) => setFormData({...formData, userType: e.target.checked ? 'technical' : ''})}
										/>
										<p>Technical</p>
									</div>
									<div className={s.checkboxGroup}>
										<input
											className={s.checkbox}
											type="checkbox"
											name="userType"
											value="business"
											checked={formData.userType === 'business'}
											onChange={(e) => setFormData({...formData, userType: e.target.checked ? 'business' : ''})}
										/>
										<p>Business</p>
									</div>
							</div>
							{formData.userType === 'technical' && (
								<>
									<h1 className={s.formTitle}>GitHub Profile</h1>
									<input
										required
										type="text"
										id='github'
										onChange={(e) => setFormData({...formData, github: e.target.value})}
										value={formData.github}
									/>
									<div className={s.formGroup}>
										<h1 className={s.formTitle}>Previous Project</h1>
										<p className={s.formDescription}>Please describe a previous project you've worked on and a challenge you overcame to complete it.</p>
										<textarea
											required
											id='previousProject'
											className={`${s.expandableTextarea}`}
											onChange={(e) => setFormData({...formData, previousProject: e.target.value})}
											value={formData.previousProject}
										/>
									</div>
								</>
							)}
							<div className={s.formGroup}>
								<h1 className={s.formTitle}>Why do you want to attend?</h1>
								<textarea
											required
											id='whyAttend'
											className={`${s.expandableTextarea}`}
											onChange={(e) => setFormData({...formData, whyAttend: e.target.value})}
											value={formData.whyAttend}
										/>
								<button type="submit">Submit Application</button>
							</div>
						</form>
					)}
					{status && <p className={s.status}>{status}</p>}
				</div>
			)}
		</div>
	);
}