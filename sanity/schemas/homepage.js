import { defineField, defineType } from "sanity";

const homepage = defineType({
	name: "homepage",
	title: "Homepages",
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
			name: "backgroundImage",
			title: "Background Image",
			type: "url",
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
			name: "buttonText",
			title: "Button Text",
			type: "string",
		}),
		// defineField({
		// 	name: "heading",
		// 	title: "heading",
		// 	type: "array",
		// 	of: [
		// 		{
		// 			type: "block",
		// 			styles: [
		// 				{ title: "Normal", value: "normal" },
		// 				{ title: "H1", value: "h1" },
		// 				{ title: "H2", value: "h2" },
		// 				{ title: "H3", value: "h3" },
		// 				{ title: "H4", value: "h4" },
		// 				{ title: "H5", value: "h5" },
		// 				{ title: "H6", value: "h6" },
		// 				{ title: "Quote", value: "blockquote" },
		// 			],
		// 		},
		// 	],
		// }),
	],
});

export default homepage;
