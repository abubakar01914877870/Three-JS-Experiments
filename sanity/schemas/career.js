import { defineField, defineType } from "sanity";

const career = defineType({
	name: "career",
	title: "Careers",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "position",
			title: "Position",
			type: "string",
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
	],
});

export default career;
