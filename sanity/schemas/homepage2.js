import { defineField, defineType } from "sanity";

const homepage2 = defineType({
	name: "homepage2",
	title: "Homepages2",
	type: "document",
	fields: [
		defineField({
			name: "heading1",
			title: "Heading1",
			type: "string",
		}),
		defineField({
			name: "heading2",
			title: "Heading2",
			type: "string",
		}),
		defineField({
			name: "subHeadings",
			title: "Sub-Headings",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
		}),
		defineField({
			name: "content",
			title: "content",
			type: "string",
		}),
		defineField({
			name: "hacker",
			type: "object",
			title: "Hacker",
			fields: [
				{
					name: "name",
					type: "string",
					title: "Name",
				},
				{
					name: "description",
					type: "array",
					title: "Description",
					of: [{ type: "string" }],
				},
				{
					name: "cv",
					type: "url",
					title: "CV",
				},
				{
					name: "address",
					type: "array",
					title: "Address",
					of: [{ type: "string" }],
				},
				{
					name: "contact",
					type: "object",
					title: "Contact Information",
					fields: [
						{
							name: "office",
							type: "string",
							title: "Office",
						},
						{
							name: "email",
							type: "string",
							title: "Email",
						},
						{
							name: "phone",
							type: "string",
							title: "Phone",
						},
					],
				},
				{
					name: "source",
					type: "url",
					title: "Source",
				},
				{
					name: "profiles",
					type: "array",
					title: "Social Media Profiles",
					of: [
						{
							type: "object",
							fields: [
								{
									name: "platform",
									type: "string",
									title: "Platform",
								},
								{
									name: "url",
									type: "url",
									title: "URL",
								},
							],
						},
					],
				},
			],
		}),
		defineField({
			name: "images",
			titles: "Images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		}),
	],
});

export default homepage2;
