import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Social = () => {
	return (
		<>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				viewport={{ once: false }}
			>
				<motion.div variants={textVariant} className='mt-12 bg-primary'>
					<p className={styles.sectionSubText}>Connect with me.</p>
					<h2 className={styles.sectionHeadText}>Socials</h2>
				</motion.div>
				<div className='flex gap-7 flex-wrap justify-center mt-8'>
					{socials.map((social, index) => (
						<a
							className='black-gradient h-20 w-20 rounded-full flex justify-center items-center'
							href={social.link}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={social.name}
							key={social.name}
						>
							<svg
								viewBox='0 0 24 24'
								className='h-9 w-9'
								fill='none'
								stroke='#fcd394'
								strokeWidth='1.8'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								{social.paths.map((d, i) => (
									<motion.path
										key={i}
										d={d}
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{
											duration: 2.5,
											ease: "easeInOut",
											repeat: Infinity,
											repeatType: "reverse",
											repeatDelay: 0.6,
											delay: index * 0.3 + i * 0.2,
										}}
									/>
								))}
							</svg>
						</a>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Social, "socials");
