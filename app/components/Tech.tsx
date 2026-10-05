"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology, index) => (
				<motion.div
					key={technology.name}
					className="w-28 h-28"
					animate={{ y: [0, -12, 0] }}
					transition={{
						duration: 3,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						delay: (index % 5) * 0.3,
					}}
				>
					<div className="group w-28 h-28 rounded-full bg-tertiary shadow-card flex items-center justify-center transition-transform duration-300 hover:scale-110">
						<Image
							src={technology.icon}
							alt={technology.name}
							width={60}
							height={60}
							title={technology.name}
							className="w-16 h-16 object-contain"
						/>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
