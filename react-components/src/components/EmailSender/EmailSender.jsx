import axios from "axios";
const EmailSender = async ({ to, subject, bodyText, bodyHtml = false, attachments = [] }) => {
	await sendMail({ to, subject, bodyText, bodyHtml });
};

async function sendMail({ to, subject, bodyText, bodyHtml, attachments }) {
	let url = "http://donifox.selfip.com:3794/testMail1";
	axios
		.get(url)
		.then((res) => {
			console.log("RES 1:");
			console.log(res);
		})
		.catch((e) => {
			console.log("error sending email");
			console.log("URL:" + url);
			console.log(e);
		});

	// try {
	// 	const info = await transporter.sendMail({
	// 		from: "Pablo Perez with Supa <supabase@jade.com.uy>",
	// 		to: to,
	// 		subject: subject,
	// 		text: bodyText,
	// 		html: bodyHtml,
	// 	});
	// 	console.log("message sent");
	// 	console.log(info);
	// } catch (e) {
	// 	console.log("Error sending email");
	// 	console.log(e);
	// }
}

export default EmailSender;
