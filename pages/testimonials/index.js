import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import { fetchTestimonialsData } from "../../data/sanity-data-fetch";

export async function getServerSideProps() {
	const testimonials = await fetchTestimonialsData();
	return {
		props: testimonials,
	};
}

const Testimonials = ({ testimonials }) => {
	return (
		<div className="py-32 text-center bg-primary/30">
			<div className="container flex flex-col justify-center h-full mx-auto">
				<motion.h2
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="mb-8 h2 xl:mb-0"
				>
					What people <span className="text-accent">say.</span>
				</motion.h2>
				<motion.div
					variants={fadeIn("up", 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					{testimonials && testimonials.length > 0 ? (
						<TestimonialSlider testimonialData={testimonials} />
					) : (
						<p>No testimonials found.</p>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
