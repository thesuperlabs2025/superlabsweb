import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = '', id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`section-padding ${className}`}
        >
            <div className="container">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
