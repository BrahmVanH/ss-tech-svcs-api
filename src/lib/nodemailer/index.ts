import nodemailer from 'nodemailer';
import { ScheduleServiceMessageInput } from '../../generated/graphql';

// const transporter = nodemailer.createTransport({
// 	service: 'smtp.ethereal.email',
// 	port: process.env.SMTP_PORT || 587,
// 	secure: process.env.SMTP_PORT ?? false,
// 	auth: {
// 		user: process.env.SMTP_USER || '',
// 		pass: process.env.SMTP_PASS || '',
// 	},
// });

//  More info on configuring with Titan 
//  https://support.titan.email/hc/en-us/articles/4405162224665-Configuring-Titan-on-Email-Scripts


export const sendScheduleServiceEmail = async (messageContent: ScheduleServiceMessageInput) => {
	const { givenName, familyName, tel, email, location, service, message } = messageContent;

	if (!givenName || !familyName || !tel || !email || !location || !service || !message) {
		throw new Error('Missing required fields');
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST ?? '',
		port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
		auth: {
			user: process.env.SMTP_USER ?? '',
			pass: process.env.SMTP_PASS ?? '',
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_USER ?? '',
		to: process.env.SMTP_USER ?? '',
		subject: `A customer would like to schedule ${service} service with you`,
		text: `Customer: ${givenName} ${familyName} /n Phone: ${tel} /n Email: ${email} /n Location: ${location} /n Service: ${service} /n Message: ${message}`,
	};

	try {
		const email = await transporter.sendMail(mailOptions);

		console.log('Email:', email);

		if (email) {
			console.log('Email sent:', email);
		}

		if (!email) {
			throw new Error('Error sending email');
		}

		return email;
	} catch (error) {
		console.error(error);
		throw new Error('Error sending email');
	}
};
