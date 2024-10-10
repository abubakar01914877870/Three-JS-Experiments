import { defineField, defineType } from "sanity";

const service = defineType({
	name: "service",
	title: "Services",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "icon",
			title: "Icon",
			type: "string",
			options: {
				list: [
					{ title: "Full Corporate Advertisements", value: "advertisments" },
					{ title: "Live Event Coverage", value: "event" },
					{ title: "Web Development", value: "web" },
					{ title: "Cinematic Shorts for Social Media", value: "shorts" },
					{ title: "Video Remixing for Social Media", value: "remix" },
					{ title: "Ongoing Series Production", value: "series" },
				],
			},
		}),
	],
});

export default service;
