import { defineField, defineType } from "sanity";

const testimonial = defineType({
	name: "testimonial",
	title: "Testimonials",
	type: "document",
	fields: [
		defineField({
			name: "person",
			title: "Person Name",
			type: "string",
		}),
		defineField({
			name: "designation",
			title: "Designation",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Person Image",
			type: "url",
		}),
		defineField({
			name: "message",
			title: "Message",
			type: "text",
		}),
	],
});

export default testimonial;
